import "../../../styles/photoEdit.css";

const hueImg = new URL(
  "../../images/photoPage/photoRed/fill.svg",
  import.meta.url
);
const contrastImg = new URL(
  "../../images/photoPage/photoRed/contrast.svg",
  import.meta.url
);
const satImg = new URL(
  "../../images/photoPage/photoRed/sat.svg",
  import.meta.url
);
const prewievImg = new URL(
  "../../images/photoPage/photoRed/prewiev.jpg",
  import.meta.url
);

export function photoEditBlock() {
  return `
  <div class="container-red disable">
      <div class="photo-editor ">
        <div class="photo-editor__img">
          <img src="${prewievImg}" alt="" />
        </div>
        <div class="photo-editor__menu">
          <div class="photo-editor__opp">
            <div class="photo-editor__icons">
              <div><img id='satIcon' class="icon actives" src="${satImg}" alt="" /></div>
              <div><img id="hueIcon" class="icon" src="${hueImg}" alt="" /></div>
              <div><img id="brIcon"  class="icon" src="${contrastImg}" alt="" /></div>
              </div>
              <div class="photo-editor__sliders">
                <div class="slider__sat sls">
                  <input
                    id='sat'
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
                <div class="slider__hue sls">
                  <input
                    id="hue"
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
                <div class="slider__brightnes sls">
                  <input
                  id="br" 
                    class="edit-slider"
                    type="range"
                    value="100"
                    min=""
                    max="200"
                  />
                </div>
              </div>
            </div>
            <form class="photo-editor__text-input" action="#">
               <textarea class="photo-editor__textarea" name="text" placeholder="Write your text" ></textarea>
              </form>
            <div class="photo-editor__buttons">
              <input type="file" class="img-input" accept="image/*" hidden>
              <button id="choose" class="choose-btn">Choose image</button>
              <button id="post" class="post-btn">Post</button>
              <button id="reset" class="cancel-btn">Reset</button>
              <button id="save" class="save-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
      `;
}
