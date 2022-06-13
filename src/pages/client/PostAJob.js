import ClientJobConfirmation from "../../components/client/ClientJobConfirmation";
import JobDeatilsForm from "../../components/client/JobDetailsForm";
import ClientJobForm from "../../hoc/CLientJobForm";

function PostAJob() {
  return (
    <div style={{ marginLeft: "34px" }}>
      <p style={{ fontSize: "18px", fontWeight: "500", color: "#003986" }}>
        Home &gt; Post a Job &gt; Job details
      </p>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#FFE901",
          marginBottom: "10px",
          marginLeft: "10px",
        }}
      >
        Enter Your Job Details
      </p>
      <div>
        <ClientJobForm>
          {(state, dispatch) => {
            if (state.page == "jobDetails") {
              return <JobDeatilsForm state={state} dispatch={dispatch} />;
            } else if (state.page == "jobConfirmation") {
              return <ClientJobConfirmation state={state} dispatch={dispatch}/>;
            }
          }}
        </ClientJobForm>
      </div>
    </div>
  );
}

export default PostAJob;
