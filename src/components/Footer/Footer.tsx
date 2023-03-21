
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
    <div className="footer-container2">
     <div className="footer-row">
       {/* Column1 */}
       <div className="footer-col-left">
         <h1>Ai Art Gallery</h1>
         <ul className="footer-list-unstyled">
           <li>Beaufort, North Carolina</li>
           <li>555 5th Ave </li>
         </ul>
       </div>
       {/* Column2 */}
       <div className="footer-col-right">
         <h2>HELPFUL LINKS</h2>
         <ul className="footer-list-unstyled">
           <li>Login</li>
           <li>About</li>
           <li>Account</li>
           <li>Portfolio</li>
         </ul>
       </div>
     </div>
     </div>
     <hr />
     <div className="footer-row">
       <p className="footer-col-sm">
         &copy;{new Date().getFullYear()} Ai Art Gallery | All rights reserved |
         Terms Of Service | Privacy
       </p>
     </div>
   </div>
  )
}

export default Footer