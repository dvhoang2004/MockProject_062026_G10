import "./Review.css";

function Review() {
    return (
        <div className="review-page">
            <div className="review-container">

                {/* Left */}
                <div className="review-left">

                    {/* <div className="breadcrumb">
                        Care Planning &gt; Review &gt; Robert Hayes
                    </div> */}

                    <div className="title-row">
                        <h1>Review Care Plan — Robert Hayes</h1>

                        <span className="status">
                            Pending Review
                        </span>
                    </div>

                    <p className="sub-title">
                        Room 204B · LOC Tier 3 · Submitted by Anna Lee
                    </p>

                    <div className="card">
                        <h3>Plan Summary (read-only)</h3>

                        <h4>Goals</h4>

                        <ul>
                            <li>Ambulate 50 ft with walker twice daily.</li>
                            <li>Maintain skin integrity.</li>
                            <li>Maintain fluid intake ≥1500 ml/day.</li>
                        </ul>

                        <h4>Interventions</h4>

                        <ul>
                            <li>Assist ambulation twice daily.</li>
                            <li>Reposition every 2 hours.</li>
                            <li>Monitor fluid intake.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Author Accountability</h3>

                        <p>Prepared by: Anna Lee, RN</p>
                        <p>Prepared on: 2026-07-02</p>
                    </div>

                    <div className="card">
                        <h3>Rejection Reason</h3>

                        <textarea
                            rows="5"
                            placeholder="Add a reason..."
                        ></textarea>
                    </div>

                </div>

                {/* Right */}
                <div className="review-right">

                    <div className="card">
                        <h3>Compliance Checklist</h3>

                        <label>
                            <input type="checkbox" checked readOnly />
                            Plan started within 48h
                        </label>

                        <label>
                            <input type="checkbox" checked readOnly />
                            Review within 7 days
                        </label>

                        <label>
                            <input type="checkbox" checked readOnly />
                            MDS linked
                        </label>

                        <label>
                            <input type="checkbox" checked readOnly />
                            CA Title addressed
                        </label>

                        <div className="complete">
                            4 / 4 Complete
                        </div>
                    </div>

                    <div className="card">
                        <h3>IDT Acknowledgment</h3>

                        <div className="user">
                            <span>Physician</span>
                            <span className="signed">Signed</span>
                        </div>

                        <div className="user">
                            <span>Dietary</span>
                            <span className="signed">Signed</span>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Decision</h3>

                        <button className="approve">
                            Approve &amp; e-Sign
                        </button>

                        <button className="reject">
                            Reject &amp; Return
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Review;