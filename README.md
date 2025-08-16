# RAG

## Envs

In order to have the RAGit application working correctly, you have to have either a `GITHUB_TOKEN` - if querying GitHub repositories - or a `GITLAB_TOKEN` - if querying GitLab repositories.


### Developing with RAGit locally

In this mode only weaviate and its addons will be dockerised. The RAGit application
itself will be running locally. This is quicker to develop as you don't have to
rebuild the Docker image each time.

```shell
cp ./verba/.env.dev.example ./verba/.env.dev
```

### Developing with RAGit in Docker

In this mode everything is running dockerised.

```shell
cp ./verba/.env.example ./verba/.env
```

## Running

### Docker

```shell
just docker-up
```

This will start `weaviate` (with its "addons"), `ollama` and `ragit`.

- You can access your local Weaviate instance at `localhost:8080`
- You can access the Verba frontend at `localhost:8000`

To terminate:

```shell
just docker-down
```

### Local

```shell
just local-ragit-up
```

To terminate:

```shell
CTRL+C # and then
just local-docker-down
```

## Development

Format, lint, typecheck:

```shell
just pre-pr
```

