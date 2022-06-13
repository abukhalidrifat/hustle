import css from '../../assets/styles/freelancer/FreelancerEarning.module.css'

function FreelancerEarning() {
    return ( 
        <div style={{ width:'90%',margin:'auto' }}>
            <div className={css.earningHeader}>
                <div className={css.totalBalance}>
                    <p>Total Balance</p>
                    <p>$1550.2</p>
                </div>
                <div className={css.currency}>
                    <p>Currency:</p>
                    <div>USD</div>
                </div>
                <div className={css.withdraw}>
                    <button>Withdraw</button>
                </div>
            </div>
            <div className={css.earnings}>
                <p className={css.earningTitle}>Earning history</p>
                <div className={css.hrLine}></div>
                <div className={css.earningCard}>
                    <p>Title of Job</p>
                    <p>Type: Remote</p>
                    <p>Balance: $150</p>
                </div>
                <div className={css.earningCard}>
                    <p>Title of Job</p>
                    <p>Type: Remote</p>
                    <p>Balance: $150</p>
                </div>
                <div className={css.earningCard}>
                    <p>Title of Job</p>
                    <p>Type: Remote</p>
                    <p>Balance: $150</p>
                </div>
                <div className={css.earningCard}>
                    <p>Title of Job</p>
                    <p>Type: Remote</p>
                    <p>Balance: $150</p>
                </div>
            </div>
        </div>
     );
}

export default FreelancerEarning;