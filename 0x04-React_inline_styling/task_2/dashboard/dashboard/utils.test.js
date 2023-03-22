import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

test('getFullYear', () =>{
    expect(getFullYear()).toEqual(new Date().getFullYear());
});

test('getFooterCopyT', ()=>{
    expect(getFooterCopy(true)).toEqual('Holberton School')
})

test('getFooterCopyF', ()=>{
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard')
})

test('getLatestNotification', () =>{
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD')
})