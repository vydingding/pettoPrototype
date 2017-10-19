import realmSchema from '../components/Realm/'
import React from 'react'
import Realm from 'realm'

class RealmConnect extends React{
    register (user , password){
        Realm.open({schema : [realmSchema]}).then( realm => {
            const person = realm.objects('Person').filtered('usrname = ' + user);
            const result = person.length;

            if(person.length > 0){
                return "Email address already registered!";
            }else{
                
            }
        });
    }
};

export default RealmConnect;