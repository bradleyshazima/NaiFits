import React from 'react'

import styles from '../../styles';

import { HiTruck } from "react-icons/hi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";

const Features = () => {
  return (
    <section className={`${styles.flexCenter} gap-5 py-10 px-40 w-full h-fit`}>
        <div className={`${styles.flexCenter} min-w-[240px] gap-3 flex-col rounded-2xl bg-slate-300 h-40 px-5 py-3`}>
            <div className={`${styles.flexCenter} h-12 w-12 rounded-full bg-slate-500 text-dWhite`}><HiTruck className='text-2xl' /></div>
            <div className="text-lg gilR text-dark">Free & Fast Delivery</div>
        </div>

        <div className={`${styles.flexCenter} min-w-[240px] gap-3 flex-col rounded-2xl bg-slate-300 h-40 px-5 py-3`}>
            <div className={`${styles.flexCenter} h-12 w-12 rounded-full bg-slate-500 text-dWhite`}><VscWorkspaceTrusted className='text-2xl' /></div>
            <div className="text-lg gilR text-dark">Non-contact Shopping</div>
        </div>

        <div className={`${styles.flexCenter} min-w-[240px] gap-3 flex-col rounded-2xl bg-slate-300 h-40 px-5 py-3`}>
            <div className={`${styles.flexCenter} h-12 w-12 rounded-full bg-slate-500 text-dWhite`}><FaMoneyBills className='text-2xl' /></div>
            <div className="text-lg gilR text-dark">Money-back Guarantee</div>
        </div>

        <div className={`${styles.flexCenter} min-w-[240px] gap-3 flex-col rounded-2xl bg-slate-300 h-40 px-5 py-3`}>
            <div className={`${styles.flexCenter} h-12 w-12 rounded-full bg-slate-500 text-dWhite`}><RiExchangeBoxFill className='text-2xl' /></div>
            <div className="text-lg gilR text-dark">Free Return Policy</div>
        </div>

        <div className={`${styles.flexCenter} min-w-[240px] gap-3 flex-col rounded-2xl bg-slate-300 h-40 px-5 py-3`}>
            <div className={`${styles.flexCenter} h-12 w-12 rounded-full bg-slate-500 text-dWhite`}><MdOutlinePayment className='text-2xl' /></div>
            <div className="text-lg gilR text-dark">Secure Payment System</div>
        </div>
    </section>
  )
}

export default Features