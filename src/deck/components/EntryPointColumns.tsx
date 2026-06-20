import { entryPointColumns } from '../deckContent';

type EntryPointColumnsProps = {
  part: number;
};

export function EntryPointColumns({ part }: EntryPointColumnsProps) {
  return (
    <div className="entry-point-layout">
      <div className="entry-point-grid">
        {entryPointColumns.map((col) => (
          <div key={col.body} className="entry-point-col">
            <p className="body">{col.body}</p>
            <div className="entry-point-col__visual visual-frame visual-frame--flush">
              <img
                src={part === 0 ? col.image : col.imagePart2}
                alt={col.imageAlt}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="entry-point-explainer">
        <div className="entry-point-explainer__icons" aria-hidden="true">
          <img
            src="/Slide Visuals/My Stack/Cursor.svg"
            alt=""
            className="entry-point-explainer__icon entry-point-explainer__icon--cursor theme-mono-icon"
          />
          <img src="/Slide Visuals/My Stack/Gemini.svg" alt="" className="entry-point-explainer__icon" />
        </div>
        <span className="small-body entry-point-explainer__text">
          Gemini and Cursor were used to create live prototypes for testing
        </span>
      </div>
    </div>
  );
}
