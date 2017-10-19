import Realm from 'realm';

class Pet extends Realm.Object{}
Pet.schema = {
    name: 'Pet',
    properties: {
           category: 'string',
           breed: 'string',
           name: 'string',
           gender: 'sting',
           birthday: 'string',
           description: 'string',
           picture: {type: 'data', optional: 'tru'},
    }
   };
   
   class Person extends Realm.Object {}
   Person.schema = {
    name: 'Person',
    properties: {
           firstname: 'string',
           lastname: 'string',
           email: 'string',
           address: 'string',
           usrname: 'string',
           password: 'string',
           confirmpassword: 'string',
           pets: {type: 'list', objectType: 'Pet'},
    }
   };

   export default new Realm({schema: [Person, Pet]});