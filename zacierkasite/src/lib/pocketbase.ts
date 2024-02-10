import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://0.0.0.0:8080');

const collection = await pb.collections.getOne('posts');