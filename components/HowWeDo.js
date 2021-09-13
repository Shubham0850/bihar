import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { Fade, Zoom, Flip, Slide } from "react-reveal";
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

export default function HowWeDo() {
  return (
    <section id="how-we-do" className="whatwedo">
      <Slide left>
        <div className="whatwedo__heading">
          <h1 className="h1">How We Do</h1>
          <h2 className="h2">Processes</h2>
        </div>
      </Slide>

      <Fade bottom cascade>
        <div className="whatewedo__img f1">
          <HoverVideoPlayer
            videoSrc="/videos/f1.mov"
            pausedOverlay={
              <Image
                src="/images/f1.png"
                alt="cover image"
                layout="fill"
                priority={true} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </Fade>

      <Fade right cascade>
        <div className="whatewedo__img f2">
          <HoverVideoPlayer
            videoSrc="/videos/f2.mov"
            pausedOverlay={
              <Image
                src="/images/f2.png"
                alt="cover image"
                layout="fill"
                priority={true} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="whatewedo__img f3">
          <HoverVideoPlayer
            videoSrc="/videos/f3.mov"
            pausedOverlay={
              <Image
                src="/images/f3.png"
                alt="cover image"
                layout="fill"
                priority={true} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </Fade>

      <Fade right cascade>
        <div className="whatewedo__img f4">
           <HoverVideoPlayer
            videoSrc="/videos/f4.mov"
            pausedOverlay={
              <Image
                src="/images/f4.png"
                alt="cover image"
                layout="fill"
                priority={true} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </Fade>

      <Fade left cascade>
        <div className="whatewedo__img f5">
        <HoverVideoPlayer
            videoSrc="/videos/f5.mov"
            pausedOverlay={
              <Image
                src="/images/f5.png"
                alt="cover image"
                layout="fill"
                priority={true} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </Fade>

      <Flip left>
        <div className="whatwedo__list">
          <ul>
            <li>
              <p className="p">3D printing</p>
            </li>
            <li>
              <p className="p">Laser cutting</p>
            </li>
            <li>
              <p className="p">Wood working</p>
            </li>
            <li>
              <p className="p">Sewing</p>
            </li>
            <li>
              <p className="p">Fibrecasting</p>
            </li>
          </ul>
        </div>
      </Flip>
    </section>
  );
}
