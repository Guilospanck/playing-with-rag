import os

import click
import uvicorn

from backend import verba_manager
from backend.env import load_env
from backend.server.types import Credentials

load_env()


@click.group()
def cli():
    """Main command group for verba."""
    pass


@cli.command()
@click.option(
    "--port",
    default=8000,
    help="FastAPI Port",
)
@click.option(
    "--host",
    default="localhost",
    help="FastAPI Host",
)
@click.option(
    "--prod/--no-prod",
    default=False,
    help="Run in production mode.",
)
@click.option(
    "--workers",
    default=4,
    help="Workers to run Ragit",
)
def start(port, host, prod, workers):
    """
    Run the FastAPI application.
    """
    uvicorn.run(
        "backend.server.api:app",
        host=host,
        port=port,
        reload=(not prod),
        workers=workers,
    )


@click.option(
    "--url",
    default=os.getenv("WEAVIATE_URL_VERBA"),
    help="Weaviate URL",
)
@click.option(
    "--deployment",
    default="Docker",
    help="Deployment (Docker)",
)
@click.option(
    "--full_reset",
    default=False,
    help="Full reset (True, False)",
)
@cli.command()
def reset(url, deployment, full_reset):
    """
    Run the FastAPI application.
    """
    import asyncio

    manager = verba_manager.RagitManager()

    async def async_reset():
        if url is not None:
            if deployment == "Docker":
                client = await manager.connect(
                    Credentials(deployment="Docker", url=url)
                )
            else:
                raise ValueError("Invalid deployment")
        else:
            raise ValueError("Invalid deployment")

        if not full_reset:
            await manager.reset_rag_config(client)
            await manager.reset_theme_config(client)
            await manager.reset_user_config(client)
        else:
            await manager.weaviate_manager.delete_all(client)

        await client.close()

    asyncio.run(async_reset())


if __name__ == "__main__":
    cli()
