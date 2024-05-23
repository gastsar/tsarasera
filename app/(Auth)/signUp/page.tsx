export type SignUpProps = {};

export const SignUp = (props: SignUpProps) => {
  return (
    <>
      <fieldset>
        <legend>Published status</legend>

        <input
          id="draft"
          className="peer/draft"
          type="radio"
          name="status"
          checked
        />
        <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
          Draft
        </label>

        <input
          id="published"
          className="peer/published"
          type="radio"
          name="status"
        />
        <label
          htmlFor="published"
          className="peer-checked/published:text-sky-500"
        >
          Published
        </label>

        <div className="hidden peer-checked/draft:block">
          Drafts are only visible to administrators.
        </div>
        <div className="hidden peer-checked/published:block">
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
      <ul
        role="list"
        className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
      <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            />
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </>
  );
};

export default SignUp;
