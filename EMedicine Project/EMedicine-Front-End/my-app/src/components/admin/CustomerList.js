import React from "react";
import './customer.css';


export default function CustomerList(){
    return (
        <div class="container">
    <div class="row">
        <div class="col-xl-12 mb-3 mb-lg-5">
            <div class="card">
                <div class="d-flex card-header justify-content-between">
                    <h5 class="me-3 mb-0">Top Customers</h5>
                    <a href="#!.html">View All</a>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pt-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0">Inara Britt</h6>
                                    <p class="mb-0 text-muted">Georgia, USA</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <span>
                                        $927.00
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0">Eduard Franz</h6>
                                    <p class="mb-0 text-muted">London, UK</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <span>
                                        $916.00
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0">Gianluca Darby</h6>
                                    <p class="mb-0 text-muted">São Paulo, Brazil</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <span>
                                        $896.50
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0">Milana Myles</h6>
                                    <p class="mb-0 text-muted">Marseille, France</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <span>
                                        $874.50
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item pb-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0">Taisiia Oluchi</h6>
                                    <p class="mb-0 text-muted">Durban, SA</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <span>
                                        $857.50
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}