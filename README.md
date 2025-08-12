# RAG

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

