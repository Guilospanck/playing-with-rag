#!/bin/bash

echo 
echo "Ollama started in the background..."
/bin/ollama serve &

echo 
echo "⏳ Waiting for Ollama to be ready..."
until /bin/ollama list >/dev/null 2>&1; do
	sleep 2
done

echo 
echo "📥 Pulling nomic-embed-text for the text embedding..."
/bin/ollama pull nomic-embed-text

echo "📥 Pulling llama3.2 for the generative part..."
/bin/ollama pull llama3.2

echo 
echo "✅ Models downloaded. Exiting..."
