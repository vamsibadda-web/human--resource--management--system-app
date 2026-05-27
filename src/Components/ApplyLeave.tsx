import { useState } from "react";
import { useLeaveStore } from "../Store/LeaveData";

function ApplyLeave(){
    const applyLeave = useLeaveStore((state) => state.addLeave)
    const[employeeName,setEmployeeName] = useState("")
    const [reason, setReason] = useState("")
    const[fromDate,setFromDate]=useState("")
    const[toDate,setToDate]=useState("")
    const handleApply =() => {
        const newLeave ={
             id: Date.now(),
             employeeName,
             reason,
             fromDate,
             toDate,
            status: "Pending",
        }
        applyLeave(newLeave)
        alert("Leave Applied")
        setEmployeeName("");
        setReason("");
        setFromDate("");
        setToDate("");
    }
    return(
        <div>
           <h2> Apply Leave</h2>
           <input placeholder="Employee Name" value={employeeName}
        onChange={(e) =>
          setEmployeeName(e.target.value)
        }/>
      <br />
      <input placeholder="Reason" value={reason}
        onChange={(e) =>
          setReason(e.target.value)
        } />
      <br />
      <input type="date" value={fromDate}
        onChange={(e) =>
          setFromDate(e.target.value)
        } />
      <br />
      <input type="date" value={toDate}
        onChange={(e) =>
          setToDate(e.target.value)
        }/>
     <br />

      <button onClick={handleApply}>Apply Leave </button>
        </div>
    )
}
export default ApplyLeave