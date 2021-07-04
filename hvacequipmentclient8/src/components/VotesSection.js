import React from 'react';

const VotesSection = ({ id, votes, setEquipmentInfo }) => {
    const voteEquipment = async () => {
        const result = await fetch(`http://data.vncvr.ca/api/people/${id}/vote`, {
            method: 'post',
        });

        const body = await result.json();
        setEquipmentInfo(body);
    }

    return (
        <React.Fragment>
            <div className="panel panel-default">
                <button onClick={() => voteEquipment()} className="btn btn-success btn-sm">Add Vote</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-info">This piece of equipment has received  {votes} votes.</span>
            </div>
        </React.Fragment>
    );
}

export default VotesSection;

