import { useEffect, useRef, useState } from "react";
import overviewImg from "./assets/overview-approach.png";
import salesTableImg from "./assets/table-01-data-description-for-Sales.png";
import productTableImg from "./assets/table-02-data-description-for-Products.png";
import categoryCheckImg from "./assets/category-check.png"
import mappingFunctionResult from "./assets/mapping-function-running-and-result.png"
import lossMakingFormulas from "./assets/formulas.png"
import lossMakingTransactionExample from "./assets/loss-making-transaction-example.png"
import rfmDescriptive from "./assets/rfm-descriptive.png"
import yeojohnson from "./assets/yeojohnson.png"
import elbow from './assets/elbow.png'
import segmentAnalysis from './assets/segment-analysis.png'
import churnModelPerformance from './assets/churn-model-performance.png'
import churnSHAP from './assets/churn-SHAP.png'
import churnTestExample from './assets/churn-test-example.png'
import systemArchitecture from './assets/system-architecture.png'
import modelPerformanceProduct from './assets/model-performance-products.png'

const sections = [
  { id: "about", label: "About" },
  { id: "overview", label: "Overview" },
  { id: "dataOverview", label: "Data Overview" },
  { id: "problem", label: "Problem" },
  { id: "feature", label: "Feature Engineering" },
  { id: "segmentation", label: "Segmentation" },
  { id: "churn", label: "Churn Prediction" },
  { id: "recommendation", label: "Product Recommendation" },
  { id: "architecture", label: "Architecture" },
  // { id: "result", label: "Result" },
  { id: "limitations", label: "Limitations & Future Work" },
  // { id: "demo", label: "Demo" },
];

  function Section({ id, innerRef, children }) {
  return (
    <section
      id={id}
      ref={innerRef}
      className="
        min-h-screen
        flex
        items-start
        pt-32 pb-40
      "
    >
      <div className="
        w-full
        max-w-5xl
        px-8 md:px-16
      ">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef({});

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const top = entry.boundingClientRect.top;

        if (top < window.innerHeight * 0.4) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-20% 0px -70% 0px"
    }
  );

  sections.forEach(s => {
    const el = refs.current[s.id];
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


  const scrollTo = (id) => {
    // console.log("*", id)
    // setActive(id); 
    // console.log("**",id)
    refs.current[id]?.scrollIntoView({ behavior: "smooth" });    
  };

  return (
    <div className="relative min-h-screen font-sans text-neutral-900">
      
      {/* LEFT NAV */}
      <aside className="
        hidden md:flex
        fixed left-16 top-1/2 -translate-y-1/2
        flex-col gap-3
        text-sm
        w-52
      ">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`
              nav-btn w-full text-left
              ${active === s.id
                ? "nav-active text-black"
                : "text-neutral-400 hover:text-neutral-800"
              }
            `}
          >
            {s.label}
          </button>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="ml-0 md:ml-64 pb-16">

        {/* ABOUT */}
        <Section
          id="about"
          innerRef={(el) => (refs.current.about = el)}
        >
          {/* SECTION LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            ABOUT THIS PROJECT
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-12">
            Enhancing Customer Retention through Machine Learning:
            <br />
            Segmentation, Churn Prediction, and Product Recommendation
            <br />
            – A Case Study on Flipkart Data
          </h1>

          {/* META GRID */}
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            
            <div className="space-y-3">
              <div className="text-neutral-400 tracking-wide">
                STUDENTS
              </div>
              <div className="space-y-1 text-neutral-800">
                <div>521H0272 - Nguyen Gia My</div>
                <div>522K0045 - Keni Nicholas Ondang </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-neutral-400 tracking-wide">
                ADVISED BY
              </div>
              <div className="text-neutral-800">
                MSc. Vo Thi Kim Anh
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-neutral-400 tracking-wide">
                YEAR
              </div>
              <div className="text-neutral-800">
                2026
              </div>
            </div>

          </div>
        </Section>

        {/* OVERVIEW */}
        <Section
          id="overview"
          innerRef={(el) => (refs.current.overview = el)}
        >
          {/* SECTION LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            OVERVIEW
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-12">
            Project Overview
          </h1>

          {/* BODY */}
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Retention rate - or customer retention rate - is one of the most
              important metrics for long-term success in e-commerce, and it is often
              more cost-effective than acquiring new customers. However, in online
              retail, customers can leave quietly, making churn difficult to detect.
            </p>

            <p>
              This project introduces a completed Customer Intelligence Dashboard that
              applies three machine learning models to the Flipkart dataset (April-July
              2022).
            </p>

            <p>
              The system segments customers based on their buying behavior, predicts
              churn risk, and recommends products for cross-selling. All models are
              integrated into a web application that provides actionable insights,
              helping marketing managers better understand customers, reduce churn, and
              improve retention.
            </p>
          </div>

          {/* IMAGE — FULL WIDTH */}
          <figure className="my-16">
            <img
              src={overviewImg}
              alt="Project approach diagram"
              className="w-full rounded-2xl"
            />
            <figcaption className="mt-4 text-sm text-neutral-500 text-center">
              Overall project approach
            </figcaption>
          </figure>

        </Section>

        {/* DATA OVERVIEW */}
        <Section
          id="dataOverview"
          innerRef={(el) => (refs.current.dataOverview = el)}
        >
          {/* SECTION LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            DATA
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Data Overview
          </h1>

          {/* BODY TEXT */}
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              The Flipkart dataset includes two main subsets: <strong>Sales</strong>{" "}
              and <strong>Products</strong>. The Sales dataset contains all customer
              transactions recorded between April 1, 2022 and July 7, 2022.
            </p>

            <p>
              This e-commerce platform sells a variety of products and users are mainly individual customers.
              Some users have very large order volumes, these could be some small businesses that using the platform as distribution channel for their products.

            </p>

            <p>
              This shows that Flipkart operates primarily in a{" "}
              <strong>Business-to-Customer (B2C)</strong> context.
              
            </p>
          </div>

          {/* METRICS BLOCK */}
          <div className="grid md:grid-cols-3 gap-12 my-16">
            <div>
              <div className="text-sm text-neutral-400 mb-2">TOTAL RECORDS</div>
              <div className="text-2xl font-semibold">46,706,386</div>
              <div className="text-sm text-neutral-500 mt-1">Sales rows</div>
            </div>

            <div>
              <div className="text-sm text-neutral-400 mb-2">ORDERS</div>
              <div className="text-2xl font-semibold">10,430,857</div>
              <div className="text-sm text-neutral-500 mt-1">Placed orders</div>
            </div>

            <div>
              <div className="text-sm text-neutral-400 mb-2">USERS</div>
              <div className="text-2xl font-semibold">1,986,587</div>
              <div className="text-sm text-neutral-500 mt-1">Active customers</div>
            </div>
          </div>

          {/* SALES TABLE */}
          <h2 className="text-2xl font-medium mt-20 mb-6">
            Sales Dataset Structure
          </h2>

          <figure className="my-10">
            <img
              src={salesTableImg}
              alt="Sales dataset description"
              className="w-full max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Table - Sales dataset features and description
            </figcaption>
          </figure>

          {/* PRODUCTS TABLE */}
          <h2 className="text-2xl font-medium mt-20 mb-6">
            Products Dataset Structure
          </h2>

          <div className="space-y-4 text-neutral-700 text-lg">
            <p>
              The Products dataset contains information for{" "}
              <strong>32,326 products</strong>
            </p>
          </div>

          <figure className="my-10">
            <img
              src={productTableImg}
              alt="Products dataset description"
              className="w-full max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Table - Products dataset features and description
            </figcaption>
          </figure>
        </Section>

        {/* PROBLEMS */}
        <Section
          id="problem"
          innerRef={(el) => (refs.current.problem = el)}
        >
          {/* LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            PROBLEMS
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Data Quality Issues & Business Logic Problems
          </h1>

          {/* INTRO */}
          <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
            During data exploration and validation, several critical data quality
            issues and business logic inconsistencies were detected in both the
            Sales and Products datasets. <br />
            These problems directly affect modeling accuracy and business interpretation, therefore a structured cleaning
            and validation strategy was applied.
          </p>

          {/* ---------- DATA QUALITY ISSUES ---------- */}
          <h2 className="text-2xl font-medium mt-20 mb-8">
            Data Quality Issues
          </h2>

          <div className="space-y-10 text-lg text-neutral-700 leading-relaxed">

            <div>
              <h3 className="font-medium mb-3">
                Missing Landing Price Values
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>79,355 records missing <strong>Total Weighted Landing Price</strong>.</li>
                <li>This value represents the total acquisition cost before selling (product cost, customs, shipping, etc.).</li>
                <li>Records with zero or missing landing price are considered invalid and removed.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                Zero Procured Quantity
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>178,908 records have zero <strong>Procured Quantity</strong>.</li>
                <li>A transaction with no purchased products is invalid.</li>
                <li>These transactions are removed.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                Zero Unit Selling Price
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>47,430 records show zero <strong>Unit Selling Price</strong>.</li>
                <li>Mostly free gifts or sample products.</li>
                <li>Non-gift zero-price items indicate pricing errors or missing product mapping.</li>
                <li>Only commercial products are kept → zero-price records removed.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                Missing Brand & Manufacturer Names
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Missing values in Products dataset.</li>
                <li>Filled with <strong>"Unknown"</strong> to preserve rows.</li>
              </ul>
            </div>

          </div>

          {/* ---------- BIG PROBLEMS ---------- */}

          <h2 className="text-2xl font-medium mt-24 mb-8">
            Major Analytical Problems Identified
          </h2>

          {/* LOSS MAKING */}
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h3 className="text-xl font-medium">
              Loss-Making Transactions
            </h3>
            
            <p>
                A loss-making transaction is defined as:
                 <ul className="list-disc ml-6 space-y-2">
                  <li>The landing price is much more than the actual gross sale.</li>
                  <li>Discount rate is greater than loss threshold: Discount Rate &gt; Loss Threshold</li>
                </ul>
            </p>

            <p>
              Five variables were created to detect loss-making transactions: gross sales, revenue, profit, discount rate, and loss
              threshold.
              <ul className="list-disc ml-6 space-y-2">
                <li>Discount rate = actual discount percentage per record</li>
                <li>Loss threshold = maximum discount that still keeps profit positive</li>
                <li>Transaction is invalid if Discount Rate &gt; Loss Threshold</li>
                <li>Or landing price exceeds gross sales value</li>
            </ul>
            </p>
            
          </div>

          {/* FORMULA IMAGE */}
          <figure className="my-14">
            <img
              src={lossMakingFormulas}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Loss-making detection formulas
            </figcaption>
          </figure>

          {/* EXAMPLE IMAGE */}
          <figure className="my-14">
            <img
              src={lossMakingTransactionExample}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Example of loss-making transaction
            </figcaption>
          </figure>

          {/* CATEGORY ISSUE */}
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h3 className="text-xl font-medium">
              Duplicate Category Name with Multiple IDs
            </h3>

            <p>
              The Products dataset contains a 3-level category hierarchy. Consistency
              checks were performed to ensure one-to-one mapping between category ID
              and category name.
            </p>

            <p>
              Category level 0 and 1 are consistent. Category level 2 contains
              duplication - the category <strong>"Syrups"</strong> maps to multiple IDs.
            </p>
          </div>

          {/* CATEGORY IMAGE */}
          <figure className="my-14">
            <img
              src={categoryCheckImg}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Category consistency check
            </figcaption>
          </figure>

          <figure className="my-14">
            <img
              src={mappingFunctionResult}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              A mapping function was built and its result after running
            </figcaption>
          </figure>

        </Section>

        {/* FEATURE ENGINEERING */}
        <Section
          id="feature"
          innerRef={(el) => (refs.current.feature = el)}
        >
          {/* LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            FEATURE ENGINEERING
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Feature Engineering
          </h1>

          {/* INTRO */}
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 max-w-3xl">
            <p>
              Feature engineering is one of the most critical steps before model
              training. It transforms raw transactional data into meaningful signals
              that better represent customer behavior and business patterns.
            </p>

            <p>
              In this project, <strong>47 features</strong> were generated.
              Some are used directly for machine learning models, while others support
              exploratory analysis and customer insight interpretation.
            </p>

            <p>
              Feature generation is organized into five main behavioral groups.
            </p>
          </div>

          {/* CATEGORY GRID */}
          <div className="grid md:grid-cols-2 gap-16 my-16 text-lg text-neutral-700">

            <div className="space-y-3">
              <h3 className="text-xl font-medium">
                Customer Value Features
              </h3>
              <p>
                Metrics that quantify customer monetary contribution and purchasing
                strength, such as revenue, profit, spending intensity, and value-based
                ratios.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">
                Temporal Behavior
              </h3>
              <p>
                These features are calculated based on the customer’s behavior over time and 
                reflect purchase patterns, regularity, and behavior fluctuations.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">
                Behavioral Diversity
              </h3>
              <p>
                Indicators measuring how varied a customer’s purchasing behavior is
                across products, categories, and brands.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium">
                Loyalty Patterns
              </h3>
              <p>
                Features describe the concentration and loyalty patterns of customer 
                purchasing behavior. 
              </p>
            </div>

          </div>

          {/* TOP CHOICE */}
          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">
            <h3 className="text-xl font-medium">
              Top-Choice Indicators
            </h3>

            <p>
              Top-choice features identify the most frequently selected products,
              brands, and categories for each customer. These features are especially
              important for recommendation modeling.
            </p>
          </div>
        </Section>
        
        {/* SEGMENTATION */}
        <Section
          id="segmentation"
          innerRef={(el) => (refs.current.segmentation = el)}
        >
          {/* LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            CUSTOMER SEGMENTATION
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Customer Segmentation with K-Means (RFM Model)
          </h1>

          {/* INTRO */}
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 max-w-3xl">

            <p>
              Traditional retail stores, markets have had to face with the rapid rising of Ecommerce platforms, 
              which offers lots of convenient services for consumers, such as shopping anytime, 
              always purchasing products at discount prices, home delivery, 
              and saving time by not having to go to physical stores or spend long time searching for products.

              At the same time, the expansion of digital platforms has
              generated massive behavioral datasets describing how customers interact
              and purchase online.
            </p>

            <p>
              Every customer action is recorded - orders, products, timing, and
              behavioral signals - giving e-commerce businesses a powerful foundation
              for personalized and customer-oriented marketing strategies.
              Customer segmentation is one of the most important analytical approaches
              to enable this personalization.
            </p>

            <p>
              In this project, <strong>K-Means clustering</strong> is applied to group
              customers with similar purchasing behavior. K-Means is an unsupervised
              learning algorithm that forms clusters by minimizing Euclidean distance
              between data points and cluster centers until convergence.
            </p>

          </div>

          {/* ---------- KMEANS PROCESS ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            K-Means Clustering Process
          </h2>

          <ul className="list-disc ml-6 space-y-3 text-lg text-neutral-700 max-w-3xl">
            <li>Select number of clusters K</li>
            <li>Initialize cluster centers randomly</li>
            <li>Assign each customer to nearest center (Euclidean distance)</li>
            <li>Update centers using cluster means</li>
            <li>Repeat until centers stabilize</li>
            <li>Use Elbow Method to determine optimal K (this project)</li>
          </ul>

          {/* ---------- FEATURE SELECTION ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Feature Selection - RFM Framework
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">

            <p>
              The RFM approach is efficient for the customer segmentation task.
              RFM is used to rank the customers based on their purchasing history.

            </p>

            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Recency</strong> - days since last purchase. Higher values indicate higher churn risk.
              </li>
              <li>
                <strong>Frequency</strong> - number of purchases in the period.
              </li>
              <li>
                <strong>Monetary</strong> - total customer spending.
              </li>
            </ul>

            <p>
              Descriptive statistics show strong behavioral variation and
              right-skewed distributions in Frequency and Monetary values, where a
              small group of customers contributes disproportionately high activity.
            </p>

          </div>

          {/* RFM STATS IMAGE */}
          <figure className="my-14">
            <img
              src={rfmDescriptive}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Descriptive statistics of RFM variables
            </figcaption>
          </figure>

          {/* ---------- TRANSFORMATION ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Distribution Transformation & Scaling
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">

            <p>
              RFM variables are highly skewed, therefore Yeo–Johnson transformation
              was applied before scaling. Unlike Box-Cox, Yeo–Johnson supports zero
              values (important for Recency).
            </p>

            <p>
              After transformation, features are standardized using
              <strong> Standard Scaler</strong> before clustering.
            </p>

          </div>

          {/* TRANSFORMATION IMAGE */}
          <figure className="my-14">
            <img
              src={yeojohnson}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Skewness before and after Yeo-Johnson transformation
            </figcaption>
          </figure>

          {/* ---------- ELBOW ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Optimal Cluster Selection
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl">
            The Elbow Method was applied to determine the optimal number of clusters.
            In this project, <strong>K = 4</strong> provides the best trade-off
            between compactness and separation.
          </p>

          <figure className="my-14">
            <img
              src={elbow}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Elbow method result
            </figcaption>
          </figure>

          {/* ---------- SEGMENTS ---------- */}

          <h2 className="text-2xl font-medium mt-24 mb-8">
            Segment Interpretation
          </h2>

          <div className="grid md:grid-cols-2 gap-16 text-lg text-neutral-700">

            <div>
              <h3 className="font-medium mb-3">Cluster 0 - New</h3>
              <p>
                Recently purchased customers with low frequency and low spending. These are the new customers.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Cluster 1 - At-Risk</h3>
              <p>
                Previously active customers who have not purchased recently. This shows that they may be at risk of becoming inactive. 
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Cluster 2 - Inactive</h3>
              <p>
                Long inactive customers with very low frequency and monetary value.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Cluster 3 - Champions</h3>
              <p>
                Purchase very recently, buy frequently, and spend the most. This group represents the most valuable customers for the business.
              </p>
            </div>

          </div>

          {/* SEGMENT IMAGE */}
          <figure className="my-14">
            <img
              src={segmentAnalysis}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Cluster analysis visualization
            </figcaption>
          </figure>

        </Section>

        {/* CHURN PREDICTION */}
        <Section
          id="churn"
          innerRef={(el) => (refs.current.churn = el)}
        >
          {/* LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            CHURN PREDICTION
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Customer Churn Prediction
          </h1>

          {/* INTRO */}
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 max-w-3xl">

            <p>
              Customer churn occurs when customers stop buying from or stop using a
              company’s products or services. This is a very important metric for every business because it shows why customers leave and helps businesses find ways to keep them. 
              We are looking at past customer data and using machine learning models to predict who might leave based on some characteristics. 

            </p>

            <p>
              In this project, historical behavioral data is used to predict churn
              probability using supervised machine learning models. The goal is to
              identify customers at risk before they leave.
            </p>

            
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h3 className="text-xl font-medium">
              Defining history and future
            </h3>
            
            <p>
                The most critical step is defining history and future as we have the churn prediction models. 
                Here, the Sales dataset should be split into two periods: <strong>Sales History</strong> and <strong>Sales Future</strong>.  
                The Sales dataset spans from April 1, 2022 to July 10, 2022. <br /><br />
                The snapshot date is determined based on the maximum available transaction date minus the churn window (in this project is <strong>50 days</strong>). 
                A data gap exists immediately after the snapshot date due to transaction data for May 2022 is only available up to 21 May 2022. 
                No records exist between 22 and 31 May 2022.
                 <ul className="list-disc ml-6 space-y-2">
                  <li>Sales History: used to calculate all customer features. .</li>
                  <li>Sales Future: used only to determine if the customer is churn. </li>
                </ul>
            </p>
            </div>

            <p>
              Three classification models were implemented and compared:
              <strong> Logistic Regression</strong>, <strong>Random Forest</strong>,
              and <strong>XGBoost (Extreme Gradient Boosting)</strong>.
            </p>

          </div>

          {/* ---------- FEATURE SELECTION ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Feature Selection for Churn Modeling
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">

            <p>
              The churn prediction models use <strong>10 features</strong>,
              most of which are generated during the feature engineering phase.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Tenure</li>
              <li>Total orders</li>
              <li>Total revenue</li>
              <li>Average days between orders</li>
              <li>Standard deviation of days between orders</li>
              <li>Maximum days between orders</li>
              <li>Average order value</li>
              <li>Average discount per order</li>
              <li>Product repurchase rate</li>
              <li>Brand loyalty score</li>
            </ul>

            <p>
              The dataset was split into <strong>80% training</strong> and
              <strong> 20% testing</strong>. All models were implemented using scikit-learn library.
            </p>

          </div>

          {/* ---------- MODEL PERFORMANCE ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Model Performance Comparison
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">

            <p>
              Among the three models, <strong>XGBoost</strong> achieved the strongest
              performance, with the highest Accuracy and ROC-AUC score.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Accuracy: <strong>73.00%</strong></li>
              <li>ROC–AUC: <strong>80.62%</strong></li>
            </ul>

            <p>
              Based on these results, XGBoost was selected as the final churn
              prediction model.
            </p>

          </div>

          {/* PERFORMANCE IMAGE */}
          <figure className="my-14">
            <img
              src={churnModelPerformance}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Model performance comparison
            </figcaption>
          </figure>

          {/* ---------- MODEL EXPLAINABILITY ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Model Explainability with SHAP
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 max-w-3xl">

            <p>
              To interpret the XGBoost model, SHAP (SHapley Additive exPlanations)
              was used to measure how each feature contributes to churn probability
              predictions.
            </p>

            <p>
              SHAP values provide transparent feature impact insights, helping
              us understand why a customer is predicted to churn.
            </p>

          </div>

          {/* SHAP IMAGE */}
          <figure className="my-14">
            <img
              src={churnSHAP}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              SHAP feature importance explanation
            </figcaption>
          </figure>

          {/* ---------- TESTING ---------- */}

          <h2 className="text-2xl font-medium mt-20 mb-6">
            Testing Churn Model for A Specific Customer
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl">
            A custom testing function was created to testing the churn probability of a specific customer.
          </p>

          {/* TEST IMAGE */}
          <figure className="my-14">
            <img
              src={churnTestExample}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Example churn prediction for a specific customer
            </figcaption>
          </figure>

        </Section>


        {/* PRODUCT RECOMMENDATION */}
        <Section
          id="recommendation"
          innerRef={el => refs.current["recommendation"] = el}
        >
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            PRODUCT RECOMMENDATION
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Hybrid Product Recommendation Engine
          </h1>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">

            <p>
              Building on the churn prediction model, this module focuses specifically on proactively engaging "At-Risk" customers. Standard recommendation engines often rely on "Best Seller" lists, which fail to interest disengaged users.
            </p>

            <p>
              To address this, this project implements a Hybrid Recommendation Strategy that balances "Safe Bets" (habitual purchases) with "Discovery" items (new interests) to maximize customer retention.
            </p>
            
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h2 className="text-xl font-medium">
              Methodology: ALS Matrix Factorization
            </h2>
            
            <p>
              The engine uses Collaborative Filtering based on the Alternating Least Squares (ALS) algorithm. This approach is specifically chosen to handle the challenges of retail data:
                 <ul className="list-disc ml-6 space-y-2">
                  <li>Implicit Feedback: Since the dataset lacks explicit ratings (like stars), the model treats purchase frequency as a "Confidence Score"—assuming repeated purchases indicate higher preference.</li>
                  <li>Latent Factors: The model projects users and products into a joint latent space to identify hidden preferences, such as brand affinity or price sensitivity, that are not obvious in raw data.</li>
                </ul>
            </p>
            </div>


            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h2 className="text-xl font-medium">
              Refining the Signal: Time Decay & BM25
            </h2>
            
            <p>
              To ensure high-quality recommendations, the interaction matrix is refined using two key techniques:
                <ul className="list-disc ml-6 space-y-2">
                  <li>Implicit Feedback: Since the dataset lacks explicit ratings (like stars), the model treats purchase frequency as a "Confidence Score" - assuming repeated purchases indicate higher preference.</li>
                  <li>BM25 Weighting (Handling Popularity Bias): To prevent the model from simply recommending "Best Sellers" to everyone, BM25 weighting is applied. This scales down the weight of globally popular items, allowing the model to uncover niche preferences and specific user interests that would otherwise be drowned out by high-volume products.</li>
                </ul>
            </p>
            </div>
          </div>

          {/* IMAGE — Hybrid Strategy Architecture */}
          <figure className="my-14">
            <img
              src={systemArchitecture}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Architecture
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <h2 className="text-xl font-medium">
              Hybrid Strategy Architecture
            </h2>
            
            <p>
              To ensure high-quality recommendations, the interaction matrix is refined using two key techniques:
                <ul className="list-disc ml-6 space-y-2">
                  <li>Exploitation (Safe Bets): Recommends "Buy Again" items based on the user's purchase history to facilitate easy replenishment.</li>
                  <li>Exploration (Discovery): Uses the ALS model to suggest items mathematically similar to known favorites (e.g., suggesting Cadbury Gems because the user likes Cadbury Perk).</li>
                </ul>
            </p>
            </div>


          {/* IMAGE — Model Performance */}
          <figure className="my-14">
            <img
              src={modelPerformanceProduct}
              className="w-full md:max-w-2xl mx-auto rounded-xl"
            />
            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
              Model Performance
            </figcaption>
          </figure>
          
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-3xl">
            <p>
              The Hybrid Strategy significantly outperformed single-method approaches during evaluation:
                <ul className="list-disc ml-6 space-y-2">
                  <li>Global Hit Rate: 61.20% (General users).</li>
                  <li>Targeted Hit Rate: 49.60% (At-Risk users).</li>
                </ul>
            </p>
            <p>
              The ability to convert nearly 50% of "At-Risk" customers validates the effectiveness of combining replenishment items with personalized discoveries.
            </p>
            </div>
        </Section>

        {/* ARCHITECTURE */}
        <Section
          id="architecture"
          innerRef={el => refs.current["architecture"] = el}
        >
          {/* SECTION LABEL */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            ARCHITECTURE
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            System Architecture 
          </h1>

          <div className="space-y-10 text-lg leading-relaxed text-neutral-700">

            <p>
              The Customer Intelligence Dashboard is built on a modern decoupled architecture, separating the machine learning inference engine (Backend) from the user interface (Frontend). This ensures scalability, high performance, and the ability to serve real-time predictions without latency.
            </p>

            {/* FRONTEND */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-neutral-900">
                Frontend: Modular Single Page Application (SPA)
              </h2>

              <p>
                The user interface is a high-performance Single Page Application (SPA) developed using React.js. While it offers a seamless experience with no full-page reloads, the codebase is structured into multiple distinct JavaScript modules (pages).
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Navigation: React Router manages the navigation between these distinct page modules—specifically the Customer Analysis, Global Overview, and Model Analytics views—ensuring instant transitions.
                </li>
                <li>
                  Visualization: Uses Recharts to render complex, interactive data visualizations such as churn trend lines and revenue area charts directly in the browser.
                </li>
                <li>
                  Styling: Built with Tailwind CSS for a consistent, responsive design system across all pages.
                </li>
              </ul>
            </div>

            {/* BACKEND */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-neutral-900">
                Backend: High-Performance Inference Engine
              </h2>

              <p>
                The "brain" of the application is built on FastAPI (Python), chosen for its asynchronous capabilities and speed compared to traditional frameworks like Django.
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  API Design: Exposes RESTful endpoints (e.g., /dashboard/{"{customer_id}"}) that serve predictions on-demand to the frontend.
                </li>
                <li>
                  Data Handling: Uses Pandas for efficient in-memory data manipulation and Joblib for model serialization.
                </li>
              </ul>
            </div>

            {/* REAL-TIME */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-neutral-900">
                Real-Time Model Integration
              </h2>

              <p>
                To achieve low-latency predictions, the system employs a Startup-Time Loading Strategy.
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  In-Memory Execution: All pre-trained models (XGBoost, K-Means Pipeline, ALS Matrix Factorization) are loaded into global memory when the application starts.
                </li>
                <li>
                  No I/O Overhead: This prevents the need to reload models from the disk for every user request, ensuring immediate response times for churn scores and product recommendations.
                </li>
              </ul>
            </div>

          </div>
        </Section>

        {/* LIMITATIONS & FUTURE WORK */}
        <Section
          id="limitations"
          innerRef={el => refs.current["limitations"] = el}
        >
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-6">
            LIMITATIONS & FUTURE WORK
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-12">
            Limitations & Future Work
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">

            <p className="font-medium text-neutral-900">
              Current Limitations
            </p>

            <ul className="list-disc ml-6 space-y-3">
              <li>
                While the system successfully demonstrates the viability of machine learning for retention, there are constraints inherent to the dataset and current infrastructure:
              </li>
              <li>
                Short-Term Data Horizon: The analysis is based on a relatively short transactional window (April–July 2022). This limits the ability to model long-term seasonal trends or multi-year Customer Lifetime Value (CLV) patterns.
              </li>
              <li>
                Implicit Feedback Only: The system relies purely on purchase history (implicit data) because the dataset lacks explicit user ratings (e.g., star reviews). Preference is inferred from frequency rather than direct user sentiment.
              </li>
              <li>
                Resource Intensity: The project processes large-scale data (~6GB raw logs) and heavy model artifacts (~2GB). Consequently, the current deployment is optimized for a local development environment rather than a live, auto-scaling public server.
              </li>
            </ul>

            <p className="font-medium text-neutral-900 mt-12">
              Future Roadmap
            </p>

            <ul className="list-disc ml-6 space-y-3">
              <li>
                Automated Retention Actions: Integrating APIs (e.g., Twilio or SendGrid) to automatically send personalized discount codes or "We Miss You" emails when a user's churn risk crosses a critical threshold.
              </li>
              <li>
                End-to-End Lifecycle Management: Developing an admin interface to upload new raw data (CSV/SQL), triggering an automated retraining pipeline without manual script execution.
              </li>
              <li>
                Cold Start Solution: Implementing Hybrid Content-Based Filtering to generate recommendations for brand-new users based on product metadata (e.g., matching category interests) before they have a purchase history.
              </li>
              <li>
                Cloud-Native Production: Migrating the application to high-memory cloud instances (e.g., AWS EC2 or Render.com) to support global access and real-time inference on larger datasets.
              </li>
            </ul>

          </div>
        </Section>


        {/* DEMO */}
        {/* <Section
          id="demo"
          innerRef={el => refs.current["demo"] = el}
        >
          <h1 className="text-6xl font-semibold mb-8">Demo</h1>
          
        </Section> */}


        {/* FOOTER */}
        <footer className="
          fixed bottom-4
          right-8
          text-xs
          bg-white/50 backdrop-blur
          text-neutral-400
          tracking-wide
          py-3
        ">
          Built by Gia-My Nguyen, collaborate with Keni Nicholas Ondang · 2026
        </footer>


      </main>


    </div>
  );
}
