import React from "react";
import "./Modalunlock.css";
import { TbChartLine } from "react-icons/tb";
import { RiLock2Line } from "react-icons/ri"
export default function UnlockChartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2><TbChartLine style={{verticalAlign: 'middle', marginRight: '8px'}} /> Unlock Resident Chart</h2>
        </div>
        
        <p className="modal-desc">Restores edit access to Robert Hayes's chart across M1 / M2 / M3 (LC-06).</p>
        
        <div className="modal-info-box">
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <RiLock2Line size={18} /> 
    <strong>Locked since 2026-07-03 09:22</strong>
  </div>
  <p style={{ margin: '5px 0 0 26px' }}>Incident #INC-2044 (BR-07)</p>
</div>

        <label className="modal-label">Reason for unlock *</label>
        <textarea className="modal-textarea" rows="3" placeholder="Physician order clarification needed..."></textarea>
        
        <label className="modal-label">Re-enter password to confirm</label>
        <input type="password" className="modal-input" placeholder="••••••••" />

        <div className="modal-actions">
          <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="btn-submit" style={{backgroundColor: '#d32f2f'}}>Unlock & Sign</button>
        </div>
      </div>
    </div>
  );
}