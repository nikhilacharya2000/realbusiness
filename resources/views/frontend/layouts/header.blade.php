<?php
use App\Models\Category;
$model = Category::get();
?>

{{-- Navbar starts --}}
<nav class="navbar fixed-top navbar-expand-lg navbar-light ">
    {{-- Container wrapper --}}
    <div class="container ">

        {{-- Brand logo --}}
        <div class="logo">
            <a class="navbar-brand fw-bold fs-4" href="/">
                
                REAL BUSINESS
            </a>
        </div>

        {{-- mobile menu toggle btn --}}
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#mainMenu"
            aria-controls="navbarTogglerButton" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list-nested"></i>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="mainMenu">
            {{-- search bar --}}
            <form class="d-flex align-items-center form-search">
                <div class="input-group">


                    {{-- search button --}}
                    {{-- <button type="button" class="btn search-icon btn-dark border-0 shadow-0">
                    <span class="bi bi-search"></span>
                </button> --}}

                    {{-- search input --}}
                    <input readonly class="form-control search-input py-2" placeholder="Explore Tools..."
                        data-mdb-toggle="modal" data-mdb-target="#searchModal">

                    <!-- drop down options -->
                    <button class="btn dropdown-toggle dropdown-sorting-btn btn-dark shadow-0 fw-semibold"
                        aria-expanded="false" data-mdb-toggle="dropdown" type="button">
                        Sort
                    </button>

                    <ul class="dropdown-menu dropdown-menu-dark fa-ul" role="menu">

                    
                           
                   
                            <li>
                                <a  class="dropdown-item"
                                    href="#"><i class="bi bi-bookmark-heart px-1"></i>
                                    Favorite</a>
                            </li>
                        

                        <li>
                            <a  class="dropdown-item" href="#">
                                <span class="pe-2">
                                    <i class="bi bi-heart"></i> </span>
                                Most Liked</a>
                        </li>
                        <li>
                            <a  class="dropdown-item" href="#">
                                <span class="pe-2">
                                    <i class="bi bi-calendar-plus"></i> </span>
                                Uploaded Today</a>
                        </li>
                    </ul>



                </div>
            </form>


         
                <ul class="navbar-nav text-center">
                    {{-- Ai news --}}
                    <li class="nav-item">
                        <a class="nav-link fs-5 link-dark" href="/news">
                            <i class="bi bi-newspaper"></i> Ai News</a>
                    </li>
                    {{-- add tool --}}
                    <li class="nav-item">
                       
                            <a class="nav-link  fs-5 link-dark" href="/add-tool">
                                <i class="bi bi-plus"></i>Add Tool</a>
                       
                        
                    </li>
                    
               
                        {{-- User Avatar  --}}
                        <a class="nav-link dropdown-toggle align-items-center" href="#"
                            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img src="" width="25" height="25"
                                class="rounded-circle">
                        </a>
                        {{-- log out btn --}}
                        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end p-0"
                            aria-labelledby="navbarDropdownMenuLink">
                            <!-- <li><a class="dropdown-item" href="/toolRequest">Request To Update </a></li> -->

                            
                            <li><a class="dropdown-item" href="/terms-conditions">Terms & Conditions</a></li>
                            <li><a class="dropdown-item" href="/privacy-policy">Privacy Policy</a></li>
                            <li><a class="dropdown-item" href="">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            
               

        </div>
       
    </div>

</nav>

    {{-- modal box --}}
    <div class="modal fade modal-box" role="dialog" tabindex="-1" id="searchModal"
        aria-labelledby="searchModalLabel" aria-hidden="true">

        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content w-100">

                <!-- modal header -->
                <div class=" modal-header" style="background: #383838; border-bottom-width: 0px;">
                    <form id="comment" class="d-flex w-100">
                        <input id="keyword" class="form-control modal-search-box me-2  text-center" name="keyword"
                            type="search" placeholder="What's on your mind?" aria-label="Search">
                        <button class="btn-close" type="submit" data-mdb-dismiss="modal" aria-label="Close">
                        </button>
                    </form>
                </div>

                    <!-- modal body -->
                    <div class="modal-body" aria-hidden="true" style="background: #222222; text-align: center;">
                        <div class="col">
                           
                                <p style="color: #d2d2d2"></p>
                               
                                    <button class="btn btn-sm shadow-sm category-btn btn-rounded"
                                    type="button">
                                     
                                    </button>
                     
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>





