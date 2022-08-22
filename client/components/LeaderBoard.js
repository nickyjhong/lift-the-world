import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeadersThunk } from '../store/topUsers';

// const dummyUsers = [
//     {id: 1, firstName: 'Ryan', lastName: 'Scoville', totalWeight: '1234'},
//     {id: 2, firstName: 'Kyle', lastName: 'Parkinson', totalWeight: '1234'},
//     {id: 3, firstName: 'Cherry', lastName: 'Xu', totalWeight: '1234'},
//     {id: 4, firstName: 'Nicole', lastName: 'Hong', totalWeight: '1234'},
//     {id: 5, firstName: 'John', lastName: 'Stone', totalWeight: '1234'},
//     {id: 6, firstName: 'Mark', lastName: 'Maycumber', totalWeight: '1234'},
//     {id: 7, firstName: 'Tim', lastName: 'Botsford', totalWeight: '1234'},
//     {id: 8, firstName: 'Steve', lastName: 'Hartman', totalWeight: '1234'},
//     {id: 9, firstName: 'Jack', lastName: 'Harper', totalWeight: '1234'},
//     {id: 10, firstName: 'Pat', lastName: 'O\'Neily', totalWeight: '1234'}
// ];

const LeaderBoard = () => {

const dispatch = useDispatch();
const topTen = useSelector((state) => state.topUsers);

useEffect(()=>{
dispatch(getLeadersThunk());
},[]);

return (
    <div>
        <h1>LeaderBoard:</h1>
        <div>{topTen.map((user)=>{
            return <div key={user.id}>
                <h3>{user.firstName} {user.lastName}</h3>
                <h3>{user.totalWeight}</h3>
            </div>
        })}

        </div>
    </div>

)
}

export default LeaderBoard;