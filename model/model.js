var homeContent = ` <header>
            <div class="header-title"><h1>Header goes here</h1></div>
            <div class="sub-header"><h3>Less important text goes here</h3></div>
            <div class="header-desc"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
            Fugiat aliquid minus nemo sed est.</p></div>
            <div class="read-more"><a href="#about">Read More</a></div>
        </header>
        <quote-block>
            <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit
            voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo”</p>
            <div class="name">John Smith</div>
            <div class="title">Corporation CEO, books author.</div>
        </quote-block>
        <upcoming-events>
            <div class="upcoming-events-header"><h2>Upcoming Events: </h2></div>
            <div class="event-list">
                <div class="event">
                    <div class="date-box"><h3>06</h3><p>JUN</p></div>
                    <div class="event-title"><p>Sed et persipiatis unde omnis iste natus</p>
                    <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                    </div>
                    </div>
                </div>
                <div class="event">
                    <div class="date-box">
                        <h3>30</h3>
                        <p>JUL</p>
                    </div>
                    <div class="event-title">
                        <p>Sed et persipiatis unde omnis iste natus</p>
                        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="date-box">
                        <h3>30</h3>
                        <p>AUG</p>
                    </div>
                    <div class="event-title">
                        <p>Sed et persipiatis unde omnis iste natus</p>
                        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="date-box">
                        <h3>23</h3>
                        <p>NOV</p>
                    </div>
                    <div class="event-title">
                        <p>Sed et persipiatis unde omnis iste natus</p>
                        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="date-box">
                        <h3>23</h3>
                        <p>DEC</p>
                    </div>
                    <div class="event-title">
                        <p>Sed et persipiatis unde omnis iste natus</p>
                        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                        </div>
                    </div>
                </div>
            </div>
        </upcoming-events>`;
var aboutContent = `<div class="about-img"></div>
        <div class="about-header">OUR HISTORY:</div>
        <div class="about-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>`;
var galleryContent = `<div class="gallery-title">GALLERY:</div>
        <div class="gallery-row">
            <a href="#gallery1"><div class="gallery-one"></div></a>
            <a href="#gallery2"><div class="gallery-two"></div></a>
            <a href="#gallery3"><div class="gallery-three"></div></a>
        </div>
        <div class="gallery-row-wide">
            <a href="#gallery4"><div class="gallery-four"></div></a>
            <a href="#gallery5"><div class="gallery-five"></div></a>
        </div>
        </div>`;
var gallery1Content = `<div class="gallery-header">
            <div class="gallery1-img"></div>
            <div class="gallery1-num">1.</div>
            <div class="gallery1-title">food festival</div>
        </div>
        <div class="paragraph-box">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
var gallery2Content = `<div class="gallery-header">
            <div class="gallery2-img"></div>
            <div class="gallery2-num">2.</div>
            <div class="gallery2-title">dee-jay</div>
        </div>
        <div class="paragraph-box">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
var gallery3Content = ` <div class="gallery-header">
            <div class="gallery3-img"></div>
            <div class="gallery3-num">3.</div>
            <div class="gallery3-title">speech</div>
        </div>
        <div class="paragraph-box">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
var gallery4Content = `<div class="gallery-header">
            <div class="gallery4-img"></div>
            <div class="gallery4-num">4.</div>
            <div class="gallery4-title">open foodfest</div>
        </div>
        <div class="paragraph-box">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
var gallery5Content = `<div class="gallery-header">
            <div class="gallery5-img"></div>
            <div class="gallery5-num">5.</div>
            <div class="gallery5-title">international</div>
        </div>
        <div class="paragraph-box">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
var blogContent = `<div class="blog-title">BLOG:</div>
       <div class="blog-row">
           <div class="blog-block">
               <div class="date-box">
                   <h3>06</h3>
                   <p>JUN</p>
               </div>
               <div class="blog-info">
                    <a href="#blog1"><div class="blog-img"></div></a>
                    <div class="blog-entry-title">Sed et persipiatis unde omnis iste natus</div>
                    <div class="blog-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
               </div>
           </div>
        <div class="blog-block">
            <div class="date-box">
                <h3>30</h3>
                <p>JUL</p>
            </div>
            <div class="blog-info">
                <a href="#blog2"><div class="blog-img"></div></a>
                <div class="blog-entry-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
        </div>
       </div>
    <div class="blog-row">
        <div class="blog-block">
            <div class="date-box">
                <h3>30</h3>
                <p>AUG</p>
            </div>
            <div class="blog-info">
                <a href="#blog3"><div class="blog-img"></div></a>
                <div class="blog-entry-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
        </div>
        <div class="blog-block">
            <div class="date-box">
                <h3>23</h3>
                <p>NOV</p>
            </div>
            <div class="blog-info">
                <a href="#blog4"><div class="blog-img"></div></a>
                <div class="blog-entry-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
        </div>
    </div>
    <div class="blog-row">
        <div class="blog-block">
            <div class="date-box">
                <h3>23</h3>
                <p>DEC</p>
            </div>
            <div class="blog-info">
                <a href="#blog5"><div class="blog-img"></div></a>
                <div class="blog-entry-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </div>
        </div>
        <div class="blog-block"></div>
        </div>`;
var blog1Content = `<div class="blog-header">
        <div class="date-block-large">
            <h3>06</h3>
            <p>JUN</p>
        </div>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #1:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #2:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
    </div>`;
var blog2Content = `<div class="blog-header">
        <div class="date-block-large">
            <h3>30</h3>
            <p>JUL</p>
        </div>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #1:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #2:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
    </div>`;
var blog3Content = `<div class="blog-header">
        <div class="date-block-large">
            <h3>30</h3>
            <p>AUG</p>
        </div>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #1:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #2:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
    </div>`;
var blog4Content = `<div class="blog-header">
        <div class="date-block-large">
            <h3>23</h3>
            <p>NOV</p>
        </div>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #1:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #2:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
    </div>`;
var blog5Content = `<div class="blog-header">
        <div class="date-block-large">
            <h3>23</h3>
            <p>DEC</p>
        </div>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #1:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="blog-entry">
        <div class="blog-entry-header">Header #2:</div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.</p>
    </div>`;
var contactContent = ` <div class="contact-title">CONTACT US: </div>
        <div class="form-and-map">
            <div class="form">
                <form action="#">
                    <div class="input-box">
                        <input type="text" id="name" name="name" placeholder="Your name..">
                    </div>
                    <div class="input-box">
                        <input type="text" id="email" name="email" placeholder="Email Address...">
                    </div>
                    <div class="input-box">
                        <input type="text" name="company" id="company" placeholder="Company...">
                    </div>
                    <div class="message-box">
                        <textarea id="subject" name="message" placeholder="Message..." style="height:200px"></textarea>
                    </div>
                    <div class="submit-button">
                        <input type="submit" value="SEND MESSAGE">
                    </div>
                </form>
            </div>
            <div class="map">
            </div>
        </div>`;

export function modelPageName(pgName){
    if(pgName == "homeContent"){
        $("nav a").removeClass("links-black").addClass("links-white");
        $("nav logo div").removeClass("logo-black").addClass("logo-white");
    }else{
        $("nav a").removeClass("links-white").addClass("links-black");
        $("nav logo div").removeClass("logo-white").addClass("logo-black");
    }

    try{
        eval(pgName);
            $("#app").html(eval(pgName));
    }catch (e){
        console.log("hello ", e);
    }
}
