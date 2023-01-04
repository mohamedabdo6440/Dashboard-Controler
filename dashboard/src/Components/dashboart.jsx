import React from 'react';
import PieChart from './PieChart';
const Dashboard = () => {

    return (
        <div className="col main pt-5 mt-3">

            <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body " style={{ backgroundColor: "#fff" }}>
                            {
                                <PieChart />
                            }
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Posts</h6>
                            <h1 className="display-4">87</h1>
                        </div>
                    </div>
                </div>



                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body " style={{ backgroundColor: "#fff" }}>
                            {
                                <PieChart />
                            }
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Shares</h6>
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>

            </div>







            <hr />




            <div className="mb-3">
                <div className="card-deck">
                    <div className="card card-inverse card-success text-center">
                        <div className="card-body">

                            <blockquote className="card-blockquote">
                                <div className='w-100'>
                                    <img src='https://cosystatic.bmwgroup.com/miniweb/cosySec?COSY-EU-100-7331L%25LayVd4Ws46Iq5gmvhmN2VUyXqiGtySE5CpLetUi5Zo1srPAb4gjqTrzOSMrt3kFE2oubkrevnTNUcPrTRI2zBy2oDNeg89Rsy19m9OGqdE4GA0og9RZNF9OALUoxPkIogOybLW4nvLUgChCjW5GybUEqjmP89ChbNm67LPoEqhk7w4UMLNmqn1%25Y9Dyk7m5VuTJYCn178z3VQtE5V1Pa2ZsfN8zVMRps9SkPazDxiYAdnMRaYWHt6Q5DxRteJoPZ8YWxfjTyUcPteWS6lHMKMfjedwOQRBDS6jQ%25gZk2Ydw6ZuUciptQ%25wc3b%25eifZu%25KXhuIHSc3uBrq56JdKX324m1wTQBrXpF7VDlZ24riI1DoscpF4HvVCt0KiIFJGzEQABHvIT9aq4O2JGvloRMUgpT9GsLxz8Uilo90yWwvbHsLoAC91qhJ0yLOEog5qTACygNLC9mlOECUkyEH7sgNEbnC5M10UkNh5E8zVAbnkq8NpCzOh5nmPkiIagq857MnNTRUmP81D5wnxb7MPVY8%25XWh1DMztPO6eqVYDafMcRjmztYRS30b67aftxdXLhw1RSfWQr4W%25VxdSeZ4F4uzWQdjcFI63aeZQ6KIvNXRjcZwBvGIrx6Kc%252G934WwBKup9ovFe%252B3ioUGIjup2XHLT9v63iprJymLGwXHi4TC7Z9%25rJHFlE1mou4TJIsN8EL3FlTv0kBSyXIslGAveCCrms8fnOl6JQDcpbH8oQt7C9cvANMCOxprg3OYCjvkqLmRSHYT2JeiKMfjNDSa3CrvSsli%25eeqVGDMnggMsGptQ%255rxlsQAuSZ7dJWEx1qL3hSF2%25P6cdtKIjAxpXNCpLQAa3aJzEiydkfgMLWHE6f4hFU%25lcICoubvYgM1xpzcPr1nALexEalq4gpn%25WNRDeFt3aJzMxQUdqfoLkWptvX%25oKNHkJEwud' alt="minicoper" className='w-75 h-75' />
                                </div>
                                <footer>Mini coper <br /><cite title="Source Title">
                                    <div className='d-flex justify-content-around mt-3'>
                                        <i className="fa-solid fa-recycle"></i>
                                        <p>130k</p>
                                        <i className="fa-solid fa-bolt"></i>
                                    </div>
                                </cite></footer>
                            </blockquote>

                        </div>
                    </div>
                    <div className="card card-inverse card-success text-center">
                        <div className="card-body">

                            <blockquote className="card-blockquote">
                                <div className='w-100'>

                                    <img src='https://imgd.aeplcdn.com/0x0/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154381.jpg?wm=0' alt="minicoper" className='w-75 h-75' />
                                </div>
                                <footer>Porsche 911 carrera <br /><cite title="Source Title">
                                    <div className='d-flex justify-content-around mt-3'>
                                        <i className="fa-solid fa-recycle"></i>
                                        <p>130k</p>
                                        <i className="fa-solid fa-bolt"></i>
                                    </div>
                                </cite></footer>
                            </blockquote>

                        </div>
                    </div>
                    <div className="card card-inverse card-success text-center">
                        <div className="card-body">

                            <blockquote className="card-blockquote">
                                <div className='w-100'>

                                    <img src='https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/718ModelImage.jpg' alt="minicoper" className='w-75 h-75' />
                                </div>
                                <footer>Porsche 911 carrera  <br /><cite title="Source Title">
                                    <div className='d-flex justify-content-around mt-3'>
                                        <i className="fa-solid fa-recycle"></i>
                                        <p>130k</p>
                                        <i className="fa-solid fa-bolt"></i>
                                    </div>
                                </cite></footer>
                            </blockquote>

                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Dashboard