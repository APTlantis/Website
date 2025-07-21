from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="unsloth/gemma-3-1b-it-GGUF",
	filename="gemma-3-1b-it-Q4_K_M.gguf",
)
