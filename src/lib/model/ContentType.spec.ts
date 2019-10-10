import test from 'ava';
import { MockDynamicContent } from '../DynamicContent.mocks';
import { ContentType } from './ContentType';

test('list sub-folders', async t => {
  const client = new MockDynamicContent();
  const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');
  const schemas = await hub.related.contentTypes.list();

  t.is(schemas[0].contentTypeUri, 'Another CT');
});

test('create schema', async t => {
  const client = new MockDynamicContent();
  const hub = await client.hubs.get('5b32377e4cedfd01c45036d8');

  const newCT = await hub.related.contentTypes.create(
    new ContentType({
      contentTypeUri: 'Another Ct'
    })
  );

  t.is(newCT.contentTypeUri, 'Another CT');
});
