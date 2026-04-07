import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, TrendingDown, IndianRupee } from 'lucide-react';

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(2000);
  
  const estimatedSystemSize = (monthlyBill / 1000).toFixed(1);
  const estimatedSavings = (monthlyBill * 0.8 * 12).toLocaleString('en-IN');
  const paybackPeriod = "4-5";

  return (
    <div className="glass-card p-8 rounded-3xl border border-solar-grey-dark">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-solar-gold p-2 rounded-lg">
          <Calculator className="w-6 h-6 text-solar-navy" />
        </div>
        <h3 className="text-2xl font-bold text-solar-navy">Solar Savings Calculator</h3>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-bold text-solar-navy uppercase tracking-wider text-xs">Monthly Electricity Bill</label>
            <span className="text-solar-gold font-bold text-xl">₹{monthlyBill}</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="20000" 
            step="500"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-solar-grey-dark rounded-lg appearance-none cursor-pointer accent-solar-gold"
          />
          <div className="flex justify-between text-xs text-gray-500 font-bold">
            <span>₹500</span>
            <span>₹20,000+</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-solar-grey p-4 rounded-2xl text-center border border-solar-grey-dark">
            <Zap className="w-6 h-6 text-solar-gold mx-auto mb-2" />
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">System Size</p>
            <p className="text-xl font-bold text-solar-navy">{estimatedSystemSize} kW</p>
          </div>
          <div className="bg-solar-grey p-4 rounded-2xl text-center border border-solar-grey-dark">
            <TrendingDown className="w-6 h-6 text-solar-gold mx-auto mb-2" />
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">Annual Savings</p>
            <p className="text-xl font-bold text-solar-navy">₹{estimatedSavings}</p>
          </div>
          <div className="bg-solar-grey p-4 rounded-2xl text-center border border-solar-grey-dark">
            <IndianRupee className="w-6 h-6 text-solar-gold mx-auto mb-2" />
            <p className="text-xs text-gray-500 uppercase font-bold mb-1">Payback Time</p>
            <p className="text-xl font-bold text-solar-navy">{paybackPeriod} Years</p>
          </div>
        </div>

        <button className="btn-primary w-full py-4">
          Get Detailed Analysis
        </button>
        
        <p className="text-[10px] text-gray-400 text-center italic">
          *Estimates based on average solar generation in Maharashtra. Actual results may vary.
        </p>
      </div>
    </div>
  );
};

export default SolarCalculator;
