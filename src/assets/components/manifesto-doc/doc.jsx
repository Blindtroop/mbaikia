export default function Doc() {
  return (
    <section id="doc" className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Coat of Arms */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.postimg.cc/hGcPxrbr/Untitled-June-04-2026-at-10-59-13.png"
            alt="Coat of Arms of Kenya"
            className="w-28 h-auto object-cover"
          />
        </div>

        {/* Document Header */}
        <div className="text-center mb-12 border-b border-neutral-200 pb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-3">
            Republic of Kenya · Juja Constituency
          </p>
          <h1
            className="text-4xl font-bold text-neutral-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Juja Manifesto
          </h1>
          <p
            className="text-xl text-[#0F8643] font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Njoroge wa Mbaikia
          </p>
          <p className="text-[12px] uppercase tracking-widest text-neutral-400">
            Parliamentary Candidate · General Election 2027
          </p>
        </div>

        {/* Document Body */}
        <div
          className="text-neutral-700 leading-[1.9] text-[15px] font-light"
          style={{ fontFamily: "'Georgia', serif" }}
        >

          {/* Preamble */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> Preamble
          </h2>
          <p className="mb-5">
            Juja is not a constituency in crisis. It is a constituency of unrealised potential. We sit at the intersection of Kenya's most dynamic economic corridor — home to Jomo Kenyatta University of Agriculture and Technology, a growing industrial base, a rapidly expanding population of young, educated, and ambitious Kenyans, and proximity to Nairobi that should, by every measure, make us one of the most prosperous constituencies in this republic.
          </p>
          <p className="mb-5">
            And yet. Roads remain unpaved. Youth remain unemployed. Bursaries remain inaccessible to those who need them most. Water is a luxury in wards that deserve it as a right. And for too long, the voice of Juja in Parliament has been either absent or captured by interests that are not ours.
          </p>
          <p className="mb-12">
            I, Njoroge wa Mbaikia, stand before the people of Juja not with promises — but with a plan. Not with rhetoric — but with timelines. Not with ambition alone — but with the record, the relationships, and the resolve to deliver. This is not my manifesto. It is ours.
          </p>

          {/* Section 1 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 01 · Governance & Accountability
          </h2>
          <p className="mb-5">
            A constituency cannot develop without trust. And trust cannot exist without transparency. Within the first 90 days in office, I commit to establishing the Juja Public Accounts Office — a constituency-level oversight body staffed by residents, civil society representatives, and independent auditors, with a mandate to track every shilling of NG-CDF allocation and publish quarterly expenditure reports.
          </p>
          <p className="mb-5">
            I will publish a Constituency Development Dashboard — an open, publicly accessible digital platform where every NG-CDF funded project is listed with its budget, timeline, contractor, and completion status. I will hold quarterly public barazas in every ward — structured town halls where I will personally account for what has been done, what is pending, and why.
          </p>
          <p className="mb-12">
            I will declare my assets publicly upon taking office and at the end of every financial year. I will not award tenders to family members, associates, or political allies. The era of the MP who appears at funerals and harambees but cannot account for CDF money is over.
          </p>

          {/* Section 2 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 02 · Education & Youth Empowerment
          </h2>
          <p className="mb-5">
            Juja is home to one of Kenya's finest universities, yet the majority of young people in this constituency cannot afford to complete secondary school. Bursary allocation has historically been opaque, politically motivated, and insufficient. I will restructure the constituency bursary program entirely — allocation based on a transparent, needs-based scoring system. No child in Juja should drop out of school because their parent voted for the wrong candidate.
          </p>
          <p className="mb-5">
            I will partner with JKUAT, Kenya National Qualifications Authority, and private sector employers to establish a Juja Skills Pipeline Program — a structured pathway from secondary school through vocational training to employment or entrepreneurship. Within the first year, I commit to facilitating 500 paid internship and apprenticeship placements for Juja youth.
          </p>
          <p className="mb-12">
            I will ensure every public primary school in Juja has access to clean water and functional sanitation facilities, and provide free sanitary products to all girls in public primary schools. A child who cannot learn because she is absent one week every month is a child the system has already failed.
          </p>

          {/* Section 3 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 03 · Economic Development & Livelihoods
          </h2>
          <p className="mb-5">
            I will establish the Juja SME Development Fund — a low-interest, accessible financing facility for small businesses, with particular focus on youth and women-owned enterprises. This will be complemented by a free business development support program offering mentorship, market access, and financial literacy training.
          </p>
          <p className="mb-5">
            For farmers in the outer wards, I will facilitate the establishment of a Juja Farmers Cooperative, linking smallholder farmers to aggregators, processors, and export markets, alongside a constituency-level produce storage facility to reduce post-harvest losses and give farmers negotiating power on price.
          </p>
          <p className="mb-12">
            Jua kali artisans, hawkers, bodaboda operators, and market traders are the backbone of Juja's economy. They deserve protection, not persecution. I will work with county government to demarcate and formalise trading areas, and ensure the bodaboda sector has access to insurance, legal protection, and skills training.
          </p>

          {/* Section 4 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 04 · Infrastructure
          </h2>
          <p className="mb-5">
            You cannot build a modern economy on broken roads. Within the first term, I commit to tarmacking a minimum of 15 kilometres of priority feeder roads across all wards, identified through a participatory mapping process with residents. These will not be the roads nearest the MP's residence. They will be the roads that connect the most people to schools, markets, and health facilities.
          </p>
          <p className="mb-12">
            I will partner with Nairobi City Water and Sewerage Company to extend piped water coverage to the wards currently relying on water vendors and boreholes. I will develop a Juja Flood Management Plan including drainage infrastructure, riparian zone restoration, and an early warning system for flood-prone areas.
          </p>

          {/* Section 5 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 05 · Health
          </h2>
          <p className="mb-5">
            I will advocate for the upgrade of at least two constituency health centres to Level 4 facilities, with full inpatient capacity, maternity wings, and diagnostic equipment. I will work with the county health department to ensure all public health facilities in Juja are staffed at minimum recommended levels.
          </p>
          <p className="mb-12">
            I will establish a Juja Mental Health Initiative — a constituency-funded program providing free counselling services, community health worker training in mental health first aid, and a 24-hour crisis line for residents in distress. The youth unemployment crisis, the cost of living, and the pressures of modern Kenyan life are producing a mental health emergency. I will address it.
          </p>

          {/* Section 6 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 06 · Missing Children & Public Safety
          </h2>
          <p className="mb-5">
            Kenya loses hundreds of children to disappearance every year. Many cases are never formally reported. Of those that are, the majority are never adequately investigated. In Kiambu County, there is no dedicated missing persons unit, no centralised registry, and no protocol. This is not acceptable.
          </p>
          <p className="mb-12">
            I will introduce a Private Member's Bill in Parliament to establish a National Missing Persons Registry. At the constituency level, I will establish a Juja Child Safety Network — a community-based early response system for missing children that activates within hours of a report. Every child who goes missing deserves the full force of the state looking for them.
          </p>

          {/* Section 7 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 07 · Environment & Climate
          </h2>
          <p className="mb-12">
            I will establish a Juja Green Constituency Program including riparian zone restoration along the Ndarugu and Ruiru rivers, a constituency-wide tree planting program targeting 100,000 trees in the first term, and the establishment of community-managed green spaces. I will advocate for a modern waste management system including a constituency composting facility and a recycling enterprise program that creates jobs while addressing waste.
          </p>

          {/* Section 8 */}
          <h2 className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 mt-12 mb-4 flex items-center gap-3">
            <span className="w-4 h-[1.5px] bg-[#0F8643] block" /> 08 · Women, Youth & Persons with Disabilities
          </h2>
          <p className="mb-12">
            These are not special interest groups. They are the majority of Juja. A minimum of 40% of all NG-CDF funded opportunities will be explicitly reserved for women and youth. All public facilities funded under my tenure will be fully accessible to persons with disabilities. A dedicated Juja Women's Economic Empowerment Fund will provide financing and mentorship for women-owned enterprises. These are not favours. They are rights.
          </p>

          {/* Closing */}
          <div className="border-t border-neutral-200 pt-12 mt-4">
            <p className="mb-5">
              I am not asking for your vote on the strength of my name. I am asking for it on the strength of this plan, the clarity of these commitments, and the understanding that Juja — its people, its land, its future — deserves representation that is present, accountable, and unapologetically focused on delivering.
            </p>
            <p className="mb-12">
              I will not be a perfect MP. But I will be an honest one. I will show up. I will account for every decision. And when I fall short, I will say so publicly and correct course. Juja deserves better. I intend to deliver it.
            </p>

            {/* Signature block */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <p
                className="text-2xl font-bold text-neutral-900 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Njoroge wa Mbaikia
              </p>
              <p className="text-[12px] uppercase tracking-widest text-neutral-400 mb-1">
                Parliamentary Candidate · Juja Constituency
              </p>
              <p className="text-[12px] uppercase tracking-widest text-neutral-400 mb-8">
                General Election 2027
              </p>
              <p className="text-[13px] italic text-neutral-400">
                Deliberate action. Lasting change.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}