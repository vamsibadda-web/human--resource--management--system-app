import { useState } from "react";
import { useLeaveStore } from "../Store/LeaveData";
import {  useNavigate } from "react-router-dom";


function ApplyLeave(){
    const addLeave = useLeaveStore((state) => state.addLeave)
    const users = useLeaveStore((state) =>state.leaves)
    const navigate= useNavigate()
    const[employeeName,setEmployeeName] = useState("")
    const [reason, setReason] = useState("")
    const[fromDate,setFromDate]=useState("")
    const[toDate,setToDate]=useState("")
    const handleApply =() => {
        const newLeave ={
             id:users.length + 1,
             employeeName,
             reason,
             fromDate,
             toDate,
            status: "Pending",
        }
        addLeave(newLeave)
        alert("Leave Applied")
        navigate("/leave-management")
        setEmployeeName("");
        setReason("");
        setFromDate("");
        setToDate("");
    }
    return(
        <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
         <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-2xl">
           <h2 className="mb-6 text-3xl font-bold text-center text-blue-600"> Apply Leave</h2>
           <div className="space-y-5">
           <input placeholder="Employee Name" value={employeeName}
        onChange={(e) =>
          setEmployeeName(e.target.value)
        } className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
      <div>
      <input placeholder="Reason" value={reason}
        onChange={(e) =>
          setReason(e.target.value)
        } className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-400"/>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
      <input type="date" value={fromDate}
        onChange={(e) =>
          setFromDate(e.target.value)
        } className="w-full px-4 py-3 border rounded-lg"/>
        </div>
        <div>
      <input type="date" value={toDate}
        onChange={(e) =>
          setToDate(e.target.value)
        }className="w-full px-4 py-3 border rounded-lg"/>
        </div>
      <button onClick={handleApply}  className="w-full py-3 text-lg font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">Apply Leave </button>
        </div>
        </div>
        </div>
    )
}
export default ApplyLeave