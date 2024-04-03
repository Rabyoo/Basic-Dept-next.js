"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css';

// React Icons
import { FaArrowRight } from "react-icons/fa";


// images
import card_1 from './assets/imgs/card-1.jpg'
import card_2 from './assets/imgs/card-2.jpg'
import google from './assets/imgs/google.webp'
import kfc from './assets/imgs/kfc.webp'
import earth from './assets/imgs/earth.webp'
import wilson from './assets/imgs/wilson.webp'
import patagonia from './assets/imgs/patagonia.webp'
// import video_card from './assets/BASIC_DEPT® - Digital Branding & Product Design Agency_2.mp4';

// Rectangle images
import imgRec_1 from './assets/imgs/img-rec-1.webp'
import imgRec_2 from './assets/imgs/img-rec-2.webp'
import imgRec_3 from './assets/imgs/img-rec-3.webp'
import imgRec_4 from './assets/imgs/img-rec-4.webp'
import imgRec_5 from './assets/imgs/img-rec-5.webp'
import imgRec_6 from './assets/imgs/img-rec-6.webp'
import imgRec_7 from './assets/imgs/img-rec-7.webp'
import imgRec_8 from './assets/imgs/img-rec-8.webp'
import imgRec_9 from './assets/imgs/img-rec-9.webp'
// import { init } from 'next/dist/compiled/webpack/webpack';

function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, []);
  return (
    <div className='container'>
      <div className='video'>
            <video 
            // controls
            preload="metadata" 
            loop 
            autoPlay 
            muted
            typeof='video/mp4'
            // controls 
            src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4" >
            </video>
        </div>
        <section data-aos="fade-up" className='one'>
            <div className='threeBoxes'>
              <div className='box w-[150px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 28"><path d="M80.145 11.71h6.464c-.345-2.092-1.509-3.137-3.145-3.137-1.637 0-2.918 1.163-3.319 3.136Zm3.61 9.935c-4.31 0-8.028-3.309-8.028-8.254 0-4.818 3.373-8.364 7.855-8.364 4.6 0 7.336 3.891 7.336 8.137 0 .463-.054 1.281-.118 1.627H80.146c.581 2.09 2.381 3.082 4.481 3.082 2.155 0 4.073-.7 5.764-1.746l.054.055-.99 4.018c-1.337.755-3.373 1.445-5.7 1.445ZM67.281 8.464c-1.864 0-2.964 1.627-2.964 3.427 0 1.745 1.11 3.373 2.964 3.373 1.864 0 2.972-1.628 2.972-3.373-.008-1.81-1.109-3.427-2.972-3.427Zm-.528 19.572c-2.563 0-4.772-.809-6.572-2.209l1.282-3.427h.054c1.627 1.336 3.2 2.036 5.182 2.036 2.21 0 3.61-1.163 3.61-2.727 0-1.627-1.283-2.79-3.556-2.79-1.981 0-3.318.526-4.536 1.1l-.054-.055.99-3.018c-1.863-1.1-2.963-3.019-2.963-5.291 0-3.546 2.854-6.628 7.218-6.628 1.573 0 2.445.291 3.555.291 1.863 0 3.554-.582 5.063-1.218h.055l-1.046 3.89-2.618-.235C73.873 8.973 74.4 10.373 74.4 12c0 1.745-1.046 3.718-3.2 4.818 2.21 1.046 3.49 2.727 3.49 5.055-.017 3.609-3.1 6.163-7.936 6.163Zm-13.5-14.99L50.4 6.018l-2.855 7.028h5.71ZM54.883 17h-8.964l-1.8 4.418h-4.654L48.709.036H52.2l9.255 21.382h-4.773L54.882 17ZM29.855 9.1c-2.5 0-4.137 1.682-4.137 4.245 0 2.382 1.628 4.246 4.191 4.246 1.918 0 3.9-1.455 3.9-4.246.01-2.5-1.8-4.245-3.954-4.245Zm3.963 10.282c-1.454 1.509-3.082 2.263-4.945 2.263-4.364 0-7.682-3.6-7.682-8.254 0-4.936 3.436-8.364 7.8-8.364 1.918 0 3.436.755 4.718 1.918V.036h4.427v21.382h-4.318v-2.036Zm-20.027-6.337-2.855-7.027-2.845 7.028h5.7ZM15.427 17H6.464l-1.8 4.418H0L9.255.036h3.49L22 21.418h-4.773L15.427 17Z"></path>
                </svg>
                <a href="#">DESIGN AND BRANDING AGENCY OF <br /> THE YEAR</a>
              </div>
              <div className='box w-[150px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367 209"><path d="M-.252 114.781v16.312c126.218-7.506 32.35-11.405 0-16.312zM-.252 141.733v16.018l1.055.264c96.158-8.875 68.557-12.11-1.055-16.282z"></path><path d="M-.252-.157v52.67c79.138-2.676 79.529-7.162 38.488-12.6l7.382-8.963c50.67 7.776 47.457 20.512 11.072 26.89 12.192 4.287 55.407 12.233 3.163 27.943 8.502 2.31 56.446 14.178-3.163 24.78 9.444 4.265 59.556 10.382 2.108 25.835 14.875 2.443 53.1 10.592 2.637 26.889 19.078 1.996 21.235 2.658 26.361 11.6v34.27h23.198V-.157H-.252z"></path><path d="M-.252 90.001v16.345c23.742-4.67 132.112-6.565 0-16.345zM-.252 62.145v17.312c74.191-3.991 99.257-9.16 0-17.312zM138.242 55.657h-12.658v-2.489h28.012v2.489h-12.655V89.48h-2.699V55.657zM160.445 53.168h2.698v16.808h23.24V53.168h2.698V89.48h-2.698V72.464h-23.24V89.48h-2.698V53.168zM198.521 53.168h25.833v2.489h-23.135v14.266h20.801v2.491h-20.801v14.577h23.395v2.489H198.52l.001-36.312zM127.461 110.352h12.05l7.174 23.809 7.936-23.924h9.818l7.933 23.924 7.174-23.809h11.817l-13.756 41.445h-9.936l-8.231-23.689-8.288 23.689h-9.936l-13.755-41.445zM191.364 130.586v-.156c0-12.367 8.846-22.152 21.372-22.152 14.561 0 21.291 10.725 21.291 23.17 0 .939 0 2.035-.077 3.055h-28.337c1.173 4.617 4.54 6.965 9.156 6.965 3.604 0 6.343-1.33 9.396-4.305l8.217 6.811c-4.069 5.164-9.939 8.609-18.315 8.609-13.306-.001-22.703-8.923-22.703-21.997zm28.806-3.678c-.547-4.699-3.363-7.674-7.434-7.674-3.917 0-6.575 2.975-7.359 7.674h14.793zM242.116 110.352h21.105c5.174 0 8.818 1.293 11.229 3.646 1.645 1.703 2.645 3.879 2.645 6.701v.117c0 4.762-2.705 7.584-6.35 9.172 4.999 1.645 8.174 4.467 8.174 10.053v.115c0 7.057-5.762 11.348-15.58 11.348h-21.224l.001-41.152zm23.75 12.699c0-2.293-1.82-3.527-5.171-3.527h-7.468v7.23h7.174c3.469 0 5.465-1.176 5.465-3.586v-.117zm-3.938 11.697h-8.7v7.584h8.818c3.526 0 5.469-1.352 5.469-3.762v-.117c0-2.234-1.768-3.705-5.587-3.705zM287.711 110.352h21.105c5.174 0 8.818 1.293 11.229 3.646 1.645 1.703 2.645 3.879 2.645 6.701v.117c0 4.762-2.705 7.584-6.35 9.172 4.999 1.645 8.17 4.467 8.17 10.053v.115c0 7.057-5.759 11.348-15.576 11.348H287.71l.001-41.152zm23.75 12.699c0-2.293-1.82-3.527-5.171-3.527h-7.468v7.23h7.174c3.465 0 5.465-1.176 5.465-3.586v-.117zm-3.939 11.697h-8.7v7.584h8.818c3.526 0 5.468-1.352 5.468-3.762v-.117c0-2.234-1.762-3.705-5.586-3.705zM340.207 136.102l-15.696-25.75h12.994l8.464 14.99 8.524-14.99h12.76l-15.643 25.574v15.578h-11.402l-.001-15.402zM146.081 169.09h2.594l16.91 36.572h-2.955l-4.617-10.168h-21.426l-4.617 10.168h-2.8l16.911-36.572zm10.791 23.965-9.544-21.008-9.599 21.008h19.143zM165.375 169.35h3.009l11.412 32.318 10.636-32.424h2.073l10.637 32.424 11.412-32.318h2.8l-13.175 36.572H202l-10.636-31.541-10.635 31.541h-2.179l-13.175-36.572zM234.936 169.117h2.594l16.91 36.57h-2.955l-4.617-10.166h-21.426l-4.617 10.166h-2.8l16.911-36.57zm10.791 23.965-9.544-21.008-9.599 21.008h19.143zM260.682 169.35h15.252c4.462 0 8.042 1.4 10.221 3.578 1.712 1.713 2.749 4.15 2.749 6.744v.104c0 6.068-4.513 9.547-10.636 10.375l11.983 15.512h-3.425l-11.567-15.043H263.38v15.043h-2.698V169.35zm14.94 18.83c6.069 0 10.581-3.061 10.581-8.299v-.105c0-4.875-3.836-7.938-10.426-7.938h-12.398v16.342h12.243zM296.928 169.35h12.088c11.412 0 19.298 7.832 19.298 18.053v.102c0 10.221-7.886 18.158-19.298 18.158h-12.088V169.35zm2.698 2.488v31.334h9.39c10.115 0 16.495-6.9 16.495-15.562v-.105c0-8.609-6.38-15.666-16.495-15.666h-9.39v-.001zM333.29 200.371l1.764-2.023c3.998 3.684 7.68 5.394 13.022 5.394 5.444 0 9.18-3.06 9.18-7.209v-.105c0-3.838-2.02-6.068-10.267-7.729-8.714-1.764-12.247-4.721-12.247-10.221v-.104c0-5.395 4.932-9.543 11.673-9.543 5.295 0 8.768 1.451 12.449 4.408l-1.709 2.127c-3.425-2.957-6.85-4.1-10.842-4.1-5.343 0-8.869 3.062-8.869 6.848v.105c0 3.838 1.973 6.172 10.578 7.936 8.402 1.711 11.936 4.721 11.936 10.012v.104c0 5.861-5.032 9.908-12.037 9.908-5.809.001-10.274-1.917-14.631-5.808z"></path>
                </svg>
                <a href="#">AGENCY OF THE YEAR</a>
              </div>
              <div className='box w-[150px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 33"><path d="m53.704 29.992-4.14-.021.026-.263c.025-.249.053-.269.495-.357.613-.121 1.012-.43 1.207-.935.144-.374.153-.81.153-7.792 0-7.222-.004-7.402-.165-7.668-.177-.292-.715-.6-1.05-.6-.258 0-.406-.143-.406-.393 0-.227.182-.311 1.036-.48.322-.065 1.5-.308 2.62-.542 1.12-.234 2.158-.446 2.306-.472l.27-.046v.925c0 .554.034.925.083.925.045 0 .332-.264.638-.585 1.234-1.296 2.768-1.592 4.349-.838.618.294 1.706 1.379 2.136 2.129 1.794 3.128 1.607 7.614-.43 10.324-1.023 1.36-2.387 2.068-3.854 1.997-1.037-.049-1.563-.276-2.293-.991-.32-.313-.596-.569-.613-.569-.017 0-.017 1.019 0 2.265.029 2.169.038 2.279.22 2.624.21.398.675.664 1.294.74.187.023.383.095.435.16.11.137.059.42-.082.458-.053.015-1.959.017-4.235.005Zm5.095-6.492c.77-.552 1.014-1.807 1.015-5.244.001-2.83-.168-4.12-.653-4.965-.249-.434-.607-.632-1.152-.638-.789-.009-1.318.433-1.72 1.436-.183.458-.188.554-.215 4.143-.032 4.146-.063 3.916.628 4.684.698.777 1.511 1.003 2.097.584Zm31.37 6.42c-1.635-.169-2.967-.487-3.785-.902-.442-.225-.96-.675-1.172-1.017-.153-.248-.19-.427-.189-.894.004-.915.28-1.283 1.371-1.833.64-.322.755-.446.535-.573-.605-.351-1.134-1.046-1.287-1.691-.195-.824.121-1.852.712-2.316.363-.285 1.052-.61 1.293-.61.224 0 .304-.258.114-.369-.083-.049-.38-.267-.659-.485-1.925-1.508-2.457-3.556-1.473-5.67.62-1.332 2.202-2.553 3.874-2.992 1.277-.335 3.005-.294 4.155.098.653.222.714.227 3.241.272l2.576.046v1.33l-1.436.042-1.437.041.475.748c.755 1.19.964 1.713 1.01 2.524.077 1.371-.312 2.35-1.346 3.384-.55.55-.817.744-1.462 1.06-1.518.745-2.278.835-5.784.68-1.592-.07-1.778-.032-1.778.364 0 .469-.077.46 4.396.51 4.012.046 4.137.053 4.703.239.896.294 1.462.615 1.883 1.065.524.56.643.822.75 1.651.339 2.625-1.55 4.555-5.04 5.151-.723.124-3.53.222-4.24.148Zm4.472-1.308c.883-.267 1.296-.47 1.638-.803.615-.602.66-1.55.091-1.97-.672-.497-1.744-.627-4.86-.588l-2.422.03-.425.222c-1.373.72-1.236 2.094.28 2.817.932.445 1.753.573 3.469.541 1.334-.024 1.575-.051 2.229-.249ZM92.53 19.69c.884-.436 1.26-1.677 1.262-4.176.002-2.297-.41-3.464-1.38-3.914-1.08-.5-2.049.2-2.491 1.8-.186.67-.265 2.95-.133 3.848.199 1.36.592 2.116 1.283 2.465.481.244.93.237 1.459-.023ZM5.907 25.316c-1.559-.155-2.852-.759-3.96-1.85C.816 22.354.216 21.014.04 19.203c-.461-4.72 3.058-8.842 7.547-8.842 1.727 0 3.294.62 4.415 1.744.895.897 1.244 1.93 1.016 2.998-.139.647-.433 1.026-1.028 1.323-.694.347-1.257.345-1.958-.005-.87-.435-1.194-1.08-1.39-2.762-.196-1.704-.416-2.01-1.44-2.01-.448 0-.619.042-.936.228-.765.45-1.337 1.358-1.656 2.628-.152.604-.17.868-.137 1.995.04 1.369.169 2.045.59 3.087.693 1.716 2.002 2.953 3.438 3.248.452.093.596.088 1.122-.038.695-.167 1.467-.567 2.119-1.098.249-.203.501-.369.56-.369.14 0 .376.362.376.575 0 .328-1.26 1.671-2.134 2.272-1.36.937-2.89 1.312-4.638 1.139Zm17.428-.002c-.954-.132-1.917-.875-2.23-1.722-.234-.635-.25-.64-.727-.236-.579.49-1.753 1.25-2.304 1.493-1.469.646-2.722.586-3.842-.184-1.297-.892-1.597-2.978-.67-4.652.356-.642 1.303-1.616 2.134-2.195 1.232-.858 3.669-2.074 4.892-2.44.597-.18.604-.198.55-1.528-.052-1.237-.226-1.654-.849-2.034-.387-.236-.458-.25-1.288-.25-.812 0-.911.018-1.309.238-.497.276-.836.795-.748 1.146.03.115.24.462.468.771.228.31.44.692.469.85.229 1.218-.98 2.268-2.5 2.17-1.368-.087-2.04-1.007-1.87-2.558.177-1.616 1.676-2.91 4.156-3.588.635-.173.876-.192 2.45-.188 1.541.003 1.822.025 2.41.189 1.64.456 2.568 1.199 2.975 2.38.054.157.105 2.035.135 4.947.045 4.477.055 4.71.213 5.028.15.299.201.335.514.357.305.023.37-.005.535-.228.215-.29.402-.321.603-.1.185.205.095.425-.405.988-.942 1.063-2.299 1.548-3.762 1.346Zm-3.495-2.692c.26-.128.605-.343.769-.477l.297-.245v-2.861c0-1.574-.02-2.86-.044-2.86-.295 0-1.423.735-2.021 1.317-1.174 1.143-1.763 2.914-1.394 4.185.336 1.154 1.24 1.51 2.393.941Zm54.914 2.703a2.91 2.91 0 0 1-1.61-.753c-.375-.346-.8-1.061-.8-1.347 0-.257-.21-.169-.989.417-.815.612-1.938 1.234-2.668 1.478-.31.104-.697.152-1.204.151-.662-.001-.811-.03-1.288-.257-.727-.344-1.161-.741-1.498-1.372-.248-.462-.286-.616-.316-1.282-.066-1.478.293-2.35 1.433-3.484.415-.413 1.035-.934 1.378-1.158 1.057-.692 2.786-1.586 3.933-2.034.602-.235 1.15-.459 1.219-.496.1-.056.124-.267.12-1.106-.006-1.242-.133-1.665-.629-2.09-.436-.373-.914-.498-1.729-.45-.782.045-1.359.3-1.647.727-.3.444-.249.744.236 1.384.484.64.574.838.574 1.258 0 .99-1.097 1.851-2.35 1.847-.953-.003-1.786-.578-2.023-1.394-.62-2.134 1.346-4.198 4.64-4.872.86-.176 2.887-.175 3.817 0 1.833.348 3.058 1.196 3.45 2.387.125.38.148 1.003.189 5.127.043 4.31.06 4.718.196 4.969.155.283.498.477.668.377.053-.032.25-.181.437-.332l.34-.275.19.202c.228.243.214.288-.275.888-.935 1.148-2.321 1.692-3.794 1.49Zm-3.473-2.742c.288-.15.625-.368.751-.487l.229-.215v-5.714l-.187.056c-.583.173-1.772 1.055-2.264 1.677-.95 1.202-1.336 2.682-.996 3.827.342 1.15 1.278 1.474 2.468.856Zm-41.193 2.571-3.407-.043-.026-.27c-.02-.218.005-.27.13-.27.273 0 .898-.461 1.046-.772.077-.163.177-.49.223-.729.117-.619.108-10.076-.01-10.503-.12-.43-.543-.847-.934-.92-.337-.064-.51-.282-.428-.541.05-.158.145-.163 3.086-.163H32.8l-.013.976c-.007.537-.01 1.048-.006 1.134.005.115.181-.021.651-.503.76-.779 1.474-1.284 2.246-1.585.483-.189.683-.219 1.473-.219.731 0 1 .034 1.347.172.983.392 1.742 1.23 2.108 2.33.095.286.202.52.238.52.035 0 .275-.274.532-.61 1.25-1.633 2.505-2.381 3.99-2.381 1.565 0 2.786.74 3.516 2.13.52.99.605 1.903.607 6.48.001 2.053.038 3.774.086 4.03.108.578.295.821.753.982.204.072.417.16.473.198.135.088.133.555-.001.56-.097.003-7.016.001-7.141-.003-.031 0-.08-.075-.108-.164-.072-.226.094-.502.3-.502.327 0 .707-.25.857-.564.225-.47.31-2.445.275-6.416-.022-2.425-.061-3.54-.133-3.758-.147-.447-.475-.795-.853-.909-.802-.24-1.812.47-2.566 1.802l-.375.66-.025 3.197c-.026 3.313.055 4.981.262 5.381.163.315.369.484.736.602.17.054.329.165.355.248.05.156-.02.42-.11.424l-3.503.007-3.448.005-.026-.294c-.024-.278-.003-.305.374-.485.32-.153.44-.274.607-.606l.208-.416v-4.778c0-4.736-.002-4.782-.181-5.17-.509-1.102-1.772-.894-2.871.473-.792.984-.743.616-.714 5.42.026 4.026.034 4.237.193 4.554.127.254.27.381.605.54.498.235.654.525.389.72a.465.465 0 0 1-.283.091c-.071-.01-1.663-.038-3.537-.062Zm48.06-.161c-.111-.29-.051-.377.442-.642.321-.173.498-.339.65-.611l.209-.374.025-5.027c.014-2.765.002-5.188-.026-5.384-.09-.614-.592-1.03-1.465-1.216-.16-.034-.227-.108-.251-.276-.08-.557-.306-.52 3.177-.52h3.152v5.937c0 4.044.03 6.075.092 6.369.124.577.477.955 1.071 1.148.414.135.46.173.483.411.018.176-.015.279-.1.311-.07.027-1.759.055-3.755.062l-3.628.013-.077-.201Zm21.863.122c-.219-.219-.004-.625.395-.746.294-.09.517-.55.611-1.263.054-.41.077-2.454.062-5.474-.024-4.704-.029-4.827-.199-5.15-.12-.23-.318-.417-.644-.607-.446-.26-.47-.291-.47-.604v-.33l5.942.043v.949c0 .603.032.959.089.978.049.017.284-.192.521-.465.561-.645 1.62-1.439 2.23-1.671.315-.12.744-.198 1.231-.224 2.002-.108 3.329.778 4.003 2.671.361 1.015.38 1.267.433 5.781.051 4.3.054 4.368.236 4.708.194.362.548.694.741.694.079 0 .114.113.114.374v.374l-3.241.015a646 646 0 0 0-3.428.02c-.161.005-.191-.042-.212-.338-.024-.329-.009-.354.328-.54.194-.108.43-.327.524-.487.166-.284.17-.4.17-5.235 0-4.78-.005-4.955-.166-5.271-.092-.18-.265-.4-.386-.488-.274-.2-.93-.22-1.276-.04-.429.226-1.037.817-1.462 1.421l-.408.581v4.127c0 3.397.022 4.2.123 4.54.129.435.417.766.833.958.19.088.255.178.275.385.017.172-.015.286-.088.314-.214.082-6.799.082-6.881 0ZM81.086 10.458c-.594-.212-1.007-.56-1.302-1.1-.207-.38-.246-.543-.244-1.033.002-.924.408-1.643 1.185-2.1.334-.196.475-.226 1.05-.225.789.002 1.154.16 1.675.725.832.903.801 2.363-.068 3.196-.609.584-1.548.803-2.296.537ZM107.333 4.41h.771v3.347c0 .357-.084.672-.251.948a1.76 1.76 0 0 1-.706.646 2.308 2.308 0 0 1-1.067.234c-.406 0-.76-.078-1.064-.234a1.76 1.76 0 0 1-.706-.646 1.789 1.789 0 0 1-.251-.948V4.41h.768v3.286c0 .23.051.435.152.614.103.18.248.32.435.423.187.101.409.152.666.152.259 0 .482-.051.669-.152.189-.103.333-.244.432-.423.102-.179.152-.383.152-.614V4.41Zm4.664 1.336a.725.725 0 0 0-.328-.546c-.192-.131-.434-.197-.726-.197-.209 0-.389.033-.542.1a.832.832 0 0 0-.355.268.633.633 0 0 0-.125.385.57.57 0 0 0 .085.314.756.756 0 0 0 .226.22c.095.059.196.108.303.147.108.039.212.07.311.095l.497.13c.163.039.329.093.5.16.171.069.329.158.475.27a1.197 1.197 0 0 1 .489 1.002c0 .287-.074.543-.223.767-.148.224-.362.4-.644.53-.28.129-.619.194-1.017.194-.381 0-.711-.061-.989-.182a1.524 1.524 0 0 1-.654-.515 1.499 1.499 0 0 1-.261-.795h.771a.784.784 0 0 0 .179.46.966.966 0 0 0 .405.27c.166.059.347.088.544.088.217 0 .41-.034.579-.102a.97.97 0 0 0 .403-.288.682.682 0 0 0 .147-.435.535.535 0 0 0-.129-.37.96.96 0 0 0-.346-.24 3.346 3.346 0 0 0-.49-.166l-.601-.164c-.408-.111-.731-.274-.97-.49-.237-.215-.355-.5-.355-.855 0-.293.079-.55.238-.768.16-.219.375-.389.647-.51a2.21 2.21 0 0 1 .919-.184c.345 0 .649.061.913.182.265.12.474.287.626.5.153.21.232.452.239.725h-.741Z"></path>
                </svg>
                <a href="#">DIGITAL INNOVATION AGENCY OF THE YEAR FINALIST</a>
              </div>
            </div>
        </section>
        <div className='line'></div>
        <section data-aos="fade-up" className='two'>
          <div className='text-content'>
            <h1>BASIC/DEPT® is a global <br /> 
            branding and digital design <br /> 
            agency building products, <br /> 
            services, and eCommerce <br /> 
            experiences that turn cultural <br /> 
            values into company value.</h1>
            <div>
              <button type='submit'>SEE THE WORK</button>
            </div>
          </div>
          <div className='svg w-[500px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100"><path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path>
            </svg>
          </div>
          <div className="cards overflow-hidden">
            <div className="card">
              <Image loading='lazy' data-aos="fade-right" className='card w-[350px] h-[70%] cursor-pointer hover:scale-105 transition-all' src={card_1} alt="card" />
              <a href='#'>PATAGONIA</a>
              <p>AN ECOMMERCE <br /> EXPERIENCE DRIVEN BY <br /> PATAGONIA’S BRAND <br /> MISSION</p>
            </div>

            <div className="card">
              <Image loading='lazy' className='card w-[350px] h-[70%] cursor-pointer hover:scale-105 transition-all' src={card_2} alt="card" />
              <a href='#'>WILSON</a>
              <p>A CENTURY-OLD SPORTS <br /> BRAND FINDING ITS <br /> PLACE IN CULTURE</p>
            </div>
            
            <div data-aos="fade-left" className="card">
              <Image loading='lazy' className='card w-[350px] h-[70%] cursor-pointer hover:scale-105 transition-all' src={card_2} alt="card" />
              <a href='#'>GOOGLE STORE</a>
              <p>AN ECOMMERCE <br /> EXPERIENCE HELPING <br /> GOOGLE BRING ITS <br /> HARDWARE TO PEOPLE <br /> ACROSS THE GLOBE</p>
            </div>
          </div>
        </section>
        <div className='line two'></div>

        <section className='three w-[100%] h-[100%]'>
            <div className="title">
              <h1>FEATURED <br /> ENGAGEMENTS</h1>
            </div>
            <div className="cards overflow-hidden">

              <div data-aos="fade-up-right" className="card">
                <Image loading='lazy' width={120} src={kfc} alt='-card-img' />
                <div className='underLine'></div>
                <br />
                <br />
                <div className="text">
                  <h2>GOOGLE</h2>
                  <p>Our embedded partnership with<br /> Google is as deep as it gets. We’re<br /> the lead creative agency for Google<br /> Store and provide strategy, design,<br /> and prototyping to other divisions. <br /> Learn more about our partnership </p>
                </div>
              </div>

              <div data-aos="fade-up-left" className="card">
                <Image loading='lazy' width={120} src={earth} alt='-card-img' />
                <div className='underLine'></div>
                <br />
                <br />
                <div className="text">
                  <h2>GOOGLE</h2>
                  <p>Our embedded partnership with<br /> Google is as deep as it gets. We’re<br /> the lead creative agency for Google<br /> Store and provide strategy, design,<br /> and prototyping to other divisions. <br /> Learn more about our partnership </p>
                </div>
              </div>

              <div data-aos="fade-down-right" className="card">
                <Image loading='lazy' width={120} src={wilson} alt='-card-img' />
                <div className='underLine'></div>
                <br />
                <br />
                <div className="text">
                  <h2>GOOGLE</h2>
                  <p>Our embedded partnership with<br /> Google is as deep as it gets. We’re<br /> the lead creative agency for Google<br /> Store and provide strategy, design,<br /> and prototyping to other divisions. <br /> Learn more about our partnership </p>
                </div>
              </div>

              <div data-aos="fade-down-left" className="card">
                <Image loading='lazy' width={120} src={patagonia} alt='-card-img' />
                <div className='underLine'></div>
                <br />
                <br />
                <div className="text">
                  <h2>GOOGLE</h2>
                  <p>Our embedded partnership with<br /> Google is as deep as it gets. We’re<br /> the lead creative agency for Google<br /> Store and provide strategy, design,<br /> and prototyping to other divisions. <br /> Learn more about our partnership </p>
                </div>
              </div>

              <div data-aos="fade-up-right" className="card">
                <Image loading='lazy' width={120} src={google} alt='-card-img' />
                <div className='underLine'></div>
                <br />
                <br />
                <div className="text">
                  <h2>GOOGLE</h2>
                  <p>Our embedded partnership with<br /> Google is as deep as it gets. We’re<br /> the lead creative agency for Google<br /> Store and provide strategy, design,<br /> and prototyping to other divisions. <br /> Learn more about our partnership </p>
                </div>
              </div>
            </div>
        </section>

        <section className='four w-[100%] h-[100%]'>
            <div  data-aos="fade-left" className="text">
              <q>BASIC/DEPT® <br /> HELPS <br /> BRANDS ● <br /> CONNECT W/ <br /> CULTURE</q>
              <p>ADWEEK AGENCY SPOTLIGHT</p>
              <button>ABOUT US</button>
            </div>
            <div data-aos="fade-right" className="img-video">
              <video className='w-[550px] '
              // preload="metadata" 
              src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" 
              typeof='video/mp4' 
              controls 
              loop 
              autoPlay
              >
              </video>
            </div>
            <div className='featured'>
                <div className='text'>
                  <h1>FEATURED NEWS</h1>
                </div>
                <div className="btn">
                  <button>VIEW ALL</button>
                </div>
            </div>
        </section>

        <section className='five'>
          <div className="rectangles">
            <div data-aos="fade-right" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_1} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-left" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_2} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-right" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_3} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-left" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_4} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-right" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_5} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-left" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_6} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-right" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_7} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-left" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_8} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>

            <div data-aos="fade-right" className="rectangle">
              <div className="image">
                <Image className="img-rec hover:scale-[1.02] transition-all" width={400} src={imgRec_9} alt='img-rectangle'/>
              </div>
              <div className="text-content">
                <a href="#">EVOLVING BEYOND MEALS IN <br /> FAVOR OF SNACKING</a>
                <p>PRESS 3.20.24</p>
              </div>
              <div className="arrow">
                <FaArrowRight fontSize={30} fontWeight={200} className='arrowIcon' />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero;