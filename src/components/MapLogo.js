import "./Map.css";

function MapLogo(props) {
    const Kothula = () => {
        document.getElementsByClassName("rand")[0].innerHTML = Math.floor(Math.random() * 100);
    }

    return (
        <svg className={props.className} height="100%" width="100%">
            <svg fill="#00000050" onClick={Kothula} className="g"
                x="0" y="0" >
                <path
                    d="M 717.13172 30.487088 C 704.22281 32.959006 697.63103 56.30477 697.63103 56.30477 L 664.94666 63.44581 C 656.15762 54.107454 643.52305 66.741977 643.52305 66.741977 C 635.55798 62.347456 615.50809 72.784131 615.50809 72.784131 C 609.19097 75.805364 604.52202 92.010482 600.67681 94.207742 L 577.33076 151.33655 C 571.83761 156.55505 589.69041 166.44268 589.69041 166.44268 C 589.69041 166.44268 587.71834 183.87635 593.53577 195.28168 C 612.7618 213.13442 630.88917 200.50034 644.07274 212.85993 C 644.07274 212.85993 649.56589 213.40906 644.07274 226.31797 C 649.56589 227.69125 636.65662 238.95236 643.52305 261.19962 C 648.46689 269.714 666.04529 263.12214 670.71446 266.14338 C 670.71446 266.14338 674.55962 271.91123 677.8555 270.53794 C 677.8555 270.53794 682.11876 260.83938 688.29271 263.3969 C 697.90572 273.83389 678.67944 255.15694 687.19383 297.72886 L 711.63827 331.51211 C 714.93415 331.78677 707.51855 343.32207 707.51855 343.32207 C 707.51855 343.32207 719.87823 344.69555 724.27276 357.3298 L 748.44235 365.56972 L 755.85824 353.21008 C 749.26646 340.57583 761.62595 319.1522 758.60472 310.0885 L 764.92221 303.22231 C 764.92221 303.22231 759.42871 288.11631 760.802 287.56699 C 760.802 287.56699 759.42905 279.60178 764.92221 280.1511 C 770.1407 288.39082 786.34533 291.96106 786.34533 291.96106 C 791.83848 293.88366 796.78253 283.44678 796.78253 283.44678 C 804.47295 262.29815 787.1693 248.2905 800.07821 225.49392 C 793.76109 218.62748 827.26958 225.2194 842.37574 213.40913 C 845.94629 202.97214 865.1721 187.59144 865.1721 187.59144 C 857.48169 176.05582 880.82758 175.50628 878.90499 169.18915 L 886.04603 121.12431 C 886.04603 121.12431 877.80643 113.15903 879.72903 99.151502 C 879.72903 99.151502 868.74259 101.62342 864.34806 93.383701 L 823.42426 94.207742 L 791.56393 100.52474 C 791.56393 100.52474 786.89452 97.778277 792.66233 86.242661 L 775.08457 39.825409 L 717.13172 30.487088 z M 723.2308 117.53318 C 726.26161 117.5289 729.25073 119.03002 729.76571 124.69483 C 729.76571 124.69483 744.87225 127.99069 744.04828 134.03315 C 754.48527 136.23041 752.56249 143.92062 757.50632 151.06171 C 774.53509 151.88568 778.1054 166.99187 778.1054 166.99187 C 778.1054 166.99187 768.49245 171.11166 765.19656 158.20275 L 752.83692 166.71752 C 756.40746 175.50656 727.29392 199.40166 717.68091 194.73248 L 709.16663 202.97192 C 709.16663 202.97192 707.24379 198.85225 710.26503 191.71116 C 710.26503 191.71116 689.94039 193.63356 692.96163 163.97055 L 716.30767 119.47623 C 716.30767 119.47623 719.79589 117.53802 723.2308 117.53318 z" />
                <path
                    d="m 875,80.55849 3.37966,-3.614204 c 0.67593,-8.107487 8.5939,-9.475012 8.5939,-9.475012 0,0 4.24866,0.293155 5.40738,-1.660577 h 2.70375 c 0,0 0.78853,-3.187896 -0.86907,-2.442 2.99336,-6.056216 -0.073,-10.040511 -2.89685,-11.917045 -0.86508,-8.387718 -16.60842,-5.567769 -20.0846,-10.451841 -2.80027,-7.13068 -9.65609,-14.163693 -9.65609,-14.163693 -6.08329,-9.27966 -16.89811,-0.293145 -16.89811,-0.293145 -3.95901,1.172141 -9.5595,0.195208 -9.94575,2.930395 0,0 -5.40742,-1.172141 -5.89021,7.326062 -0.57937,2.539708 -4.24869,-0.09755 -6.08335,1.074506 -1.06213,0.293156 -5.89018,10.549479 -8.59391,13.968318 0.19324,3.516506 -1.1587,6.251589 -1.1587,6.251589 1.93124,1.367526 0.0967,12.30773 1.25527,15.433509 1.83465,0.488404 1.06219,5.470133 1.06219,5.470133 0,0 5.79362,4.395639 16.2222,6.056216 0,0 6.46954,-1.172183 9.36639,-0.683778 l 13.80816,0.195218 c 7.72487,-2.246658 5.89023,-4.004942 20.27774,-4.004942 z" />
            </svg>
        </svg>
    )
}

export default MapLogo;