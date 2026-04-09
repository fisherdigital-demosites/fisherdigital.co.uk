"""
Generate the AI receptionist demo call audio.
Uses Chatterbox TTS for both voices (different settings for caller vs AI).
Output: public/audio/demo-call.mp3

Install: pip install chatterbox-tts pydub
Requires ffmpeg on PATH for mp3 export.
"""

import os
import sys

# Monkey-patch: Chatterbox expects perth.PerthImplicitWatermarker which doesn't exist
# in the public perth package. Stub it out — watermarking isn't needed for a demo clip.
import types
import importlib
try:
    import perth as _perth
    if not hasattr(_perth, 'PerthImplicitWatermarker'):
        class _FakeWatermarker:
            def __call__(self, *a, **kw): return a[0] if a else None
            def apply(self, *a, **kw): return a[0] if a else None
        _perth.PerthImplicitWatermarker = _FakeWatermarker
except ImportError:
    _perth = types.ModuleType('perth')
    class _FakeWatermarker:
        def __call__(self, *a, **kw): return a[0] if a else None
        def apply(self, *a, **kw): return a[0] if a else None
    _perth.PerthImplicitWatermarker = _FakeWatermarker
    sys.modules['perth'] = _perth

try:
    from chatterbox.tts import ChatterboxTTS
    from pydub import AudioSegment
except ImportError:
    print("Install dependencies first:")
    print("  pip install chatterbox-tts pydub")
    print("  Also need ffmpeg on PATH for mp3 export")
    sys.exit(1)

# Transcript — alternating caller and AI receptionist
transcript = [
    ("caller", "Hi, I'd like to book a check-up please."),
    ("ai", "Of course! I can see appointments available this Thursday or Friday afternoon. Which works better for you?"),
    ("caller", "Thursday would be great. Around 2 o'clock?"),
    ("ai", "Perfect. I've got a 2:15 slot with Dr Patel. Can I take your name?"),
    ("caller", "It's Sarah Mitchell."),
    ("ai", "Lovely, Sarah. You're booked for Thursday at 2:15 with Dr Patel. We'll send a text confirmation. Is there anything else I can help with?"),
    ("caller", "No, that's perfect. Thank you."),
    ("ai", "You're welcome. Have a great day, Sarah."),
]

# Pause between lines (ms)
SHORT_PAUSE = 400
LONG_PAUSE = 700

def main():
    print("Loading Chatterbox model (first run downloads ~1.5GB)...")
    model = ChatterboxTTS.from_pretrained(device="cpu")

    output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
    os.makedirs(output_dir, exist_ok=True)

    combined = AudioSegment.silent(duration=500)  # Lead-in silence

    for i, (speaker, text) in enumerate(transcript):
        print(f"  [{i+1}/{len(transcript)}] {speaker}: {text[:40]}...")

        # Generate speech
        # Chatterbox uses different exaggeration values for voice variation
        # Higher exaggeration = more expressive
        exaggeration = 0.3 if speaker == "caller" else 0.5

        wav = model.generate(
            text,
            exaggeration=exaggeration,
        )

        # Save temp wav
        temp_path = os.path.join(output_dir, f"_temp_{i}.wav")
        import torchaudio
        torchaudio.save(temp_path, wav, model.sr)

        # Load into pydub
        segment = AudioSegment.from_wav(temp_path)

        # Slight pitch shift to differentiate voices
        if speaker == "ai":
            # Speed up slightly for a crisper AI voice
            segment = segment.speedup(playback_speed=1.05)

        combined += segment
        combined += AudioSegment.silent(duration=LONG_PAUSE if speaker == "ai" else SHORT_PAUSE)

        # Clean up temp
        os.remove(temp_path)

    # Add trailing silence
    combined += AudioSegment.silent(duration=1000)

    # Export
    output_path = os.path.join(output_dir, "demo-call.mp3")
    combined.export(output_path, format="mp3", bitrate="128k")
    print(f"\nDone! Saved to: {output_path}")
    print(f"Duration: {len(combined) / 1000:.1f}s")

if __name__ == "__main__":
    main()
