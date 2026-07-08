import "./ESignatureModal.css";

function ESignatureModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay">

            <div className="esign-modal">

                <div className="modal-header">
                    <h2>Electronic Signature Required</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <p className="modal-subtitle">
                    Please verify your identity before approving this care plan.
                </p>

                <div className="form-group">
                    <label>Display Name</label>

                    <input
                        type="text"
                        value="Anna Lee"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>

                <label className="remember">
                    <input type="checkbox" defaultChecked />
                    Confirm this electronic signature
                </label>

                <div className="signature-time">
                    Signature timestamp:
                    <span>2026-07-02 10:30 AM</span>
                </div>

                <div className="modal-footer">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button className="sign-btn">
                        Sign & Approve
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ESignatureModal;