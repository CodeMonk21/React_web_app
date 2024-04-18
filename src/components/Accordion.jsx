import React from 'react'

function Accordion(props) {
    return (
        <>
            <div class="accordion" id="accordionExample" style={{border:"none"}}>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            <span className='fs-4 fw-bold'>{props.data?.question}</span>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        {props.data?.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion