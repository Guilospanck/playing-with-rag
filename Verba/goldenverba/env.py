import os
from dotenv import load_dotenv
from wasabi import msg
from pathlib import Path


def load_env():
    if os.getenv("ENV") == "dev":
        msg.info("Loading DEV environment variables...")
        load_dotenv(Path(__file__).parent / "../.env")
        load_dotenv(Path(__file__).parent / "../.env.dev", override=True)
    else:
        msg.info("Loading PROD environment variables...")
        load_dotenv(Path(__file__).parent / "../.env")
