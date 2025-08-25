import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Civil Engineer",
    description: "Responsible for planning, designing, and overseeing construction projects.",
  },
  {
    id: 2,
    title: "Project Manager",
    description: "Manage teams, schedules, and budgets to ensure successful project delivery.",
  },
  {
    id: 3,
    title: "Site Supervisor",
    description: "Supervise on-site construction, ensure safety compliance, and monitor progress.",
  },
];

const HomeTeam = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-brown mb-4">Our Team</h2>
          <p className="text-brown mb-8 max-w-md">
            We have a strong, dedicated, and experienced team of professionals working to
            deliver top-quality construction projects on time and within budget.
          </p>

          <h3 className="text-2xl font-semibold text-orange mb-6">Open Jobs</h3>

          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-orange rounded-full"></div>

            {/* Jobs */}
            <div className="space-y-12">
              {jobs.map((job) => (
                <div key={job.id} className="relative pl-6">
                  {/* Dot on vertical line */}
                  <div className="absolute -left-4 top-2 w-6 h-6 bg-orange rounded-full border-2 border-cream box-border"></div>
                  <h4 className="text-xl font-bold text-brown mb-2">{job.title}</h4>
                  <p className="text-brown text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-full overflow-hidden">
            <img
              src="/assets/team.png"
              alt="Our Team"
              className="rounded-2xl shadow-lg border-r-8 border-b-8 border-orange w-full box-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTeam;
