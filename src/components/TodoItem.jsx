import React, { useState } from 'react';

function TodoItem({ todoName, todoDate, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-1">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className={`col-5 ${isChecked ? 'strikethrough' : ''}`}>
                    {todoName}
                </div>
                <div className="col-3">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button"
                    onClick={()=>onDelete(todoName)}>
                        ❌
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
