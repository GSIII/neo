import os
from langchain.embeddings import HuggingFaceEmbeddings
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, ServiceContext, LLMPredictor, LangchainEmbedding
from langchain.chat_models import ChatOpenAI

documents = SimpleDirectoryReader('data').load_data()

embeded_model = LangchainEmbedding(HuggingFaceEmbeddings(
    model_name="bongsoo/moco-sentencedistilbertV2.1",
))
print('-'*50)
print("Embedding Model initialized successfully")

llm_predictor = LLMPredictor(llm=ChatOpenAI(
    temperature=0,
    model_name="gpt-3.5-turbo"
))
print('-'*50)
print("LLM Predictor initialized successfully")

service_context = ServiceContext(
    llm_predictor=llm_predictor,
    embeded_model=embeded_model
)
print('-' * 50)
print("Service context initialized successfully")

index = GPTVectorStoreIndex.from_documents(
    documents,
    service_context=service_context,
)
print('-' * 50)
print("Index initialized successfully")

query_engine = index.as_query_engine()
print("Query engine initialized successfully")

query="미코의 소꿉친구 이름은?"
response = query_engine.query(query)
print('-' * 50)
print(f'query : {query}', end='\n\n')
print(f'response : {response}', end='\n\n')
print(f'source_nodes : {response.source_nodes}')
print('-' * 50)