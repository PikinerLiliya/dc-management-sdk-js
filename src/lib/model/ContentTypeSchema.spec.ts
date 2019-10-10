import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
import { ContentTypeSchema } from './ContentTypeSchema';

test('list sub-folders', async t => {
  const client = new MockDynamicContent();
  const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
  const schemas = await hub.related.contentTypeSchemas.list();

  t.is(schemas[0].schemaId, 'Another Schema');
});

test('create schema', async t => {
  const client = new MockDynamicContent();
  const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');

  const newFolder = await hub.related.contentTypeSchemas.create(
    new ContentTypeSchema({
      schemaId: 'Another Schema'
    })
  );

  t.is(newFolder.schemaId, 'Another Schema');
});
