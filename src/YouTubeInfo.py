import openai
from youtube_transcript_api import YouTubeTranscriptApi

openai.api_key = ""

def get_transcript(video_id):
    # Fetching the transcript using youtube-transcript-api
    transcript_data = YouTubeTranscriptApi.get_transcript(video_id)
    
    # Storing the full transcript in the variable
    transcript = ' '.join([entry['text'] for entry in transcript_data])
    return transcript

def get_titles(transcript):
    # Using OpenAI API to generate 5 non-clickbait titles
    response = openai.Completion.create(
        engine="davinci-codex",
        prompt=f"Generate 5 informative and non-clickbait titles for the following content:\n{transcript}\n\n1.",
        temperature=0.5,
        max_tokens=60,
        n=5,
        stop=None,
    )
    titles = [choice['text'].strip() for choice in response.choices]
    return titles

def get_summary(transcript):
    # Using OpenAI API to generate a 50-word summary
    response = openai.Completion.create(
        engine="davinci-codex",
        prompt=f"Summarize the following content in 50 words:\n{transcript}",
        temperature=0.5,
        max_tokens=50,
        n=1
    )
    return response.choices[0].text.strip()


video_id = ""
transcript = get_transcript(video_id)
titles = get_titles(transcript)
summary = get_summary(transcript)

print("Generated Titles:", titles)
print("\nSummary:", summary)
