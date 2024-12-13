import PocketBase from 'pocketbase';

const pb = new PocketBase('https://book-not-reads.pockethost.io');


const record = await pb.collection('datalake_book').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
});