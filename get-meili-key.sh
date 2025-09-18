docker compose exec meilisearch /bin/ash -c 'curl -s -X GET "localhost:7700/keys" -H "Authorization: Bearer $MEILI_MASTER_KEY"' | \
python3 -c "import sys, json; print('\n'.join([f'{key[\"name\"]}: {key[\"key\"]}' for key in json.load(sys.stdin)['results']]))"
