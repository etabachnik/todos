
import './Todo.css';
import moment from 'moment';

const PRIORITY = {
    Low: 1,
    Medium:2,
    Hight : 3
}

const Todo = ({item, changeStatus})=>{

    const convertDate=(date)=>{
        const now =moment();
        const date2 = moment.unix(date);
        
        const diffInDays = date2.diff(now, 'days');
        

        if (now.isSame(date2, 'days')) {
            return 'Today';
        }

        return `in ${diffInDays} days`;
    }

    const getPriority = (pr)=>{
        return Object.keys(PRIORITY)[pr];
    }

    const changeTodo= (id)=>{
        changeStatus(id);
    }

 return(
    <div className='todoDiv'>
         <button  onClick={()=>changeTodo(item.id)} className= {item.status ==='completed' ? 'statusDivCompleted' : 'statusDiv'}/>
         <div style={{ width: '46%' }} className='divTitle'>{item.title}</div>
         <div className='divDate' style={{ width: '24%' }}>{convertDate(item.created_at)}</div>
         <div className={item.priority===1 ? 'divPriorityLow' : item.priority===2 ? 'divPriorityMedium' :'divPriorityHight'}>{getPriority(item.priority-1)}</div>
    </div>
 )
}

export default Todo