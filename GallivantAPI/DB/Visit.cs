using System;
using System.Data.SqlClient;

namespace GallivantAPI.DB
{
    public class Visit
    {
        private SqlConnection _conn;
        public Visit(SqlConnection conn)
        {
            _conn = conn;   
        }

        public List<Models.Visit> Read() 
        {
            List<Models.Visit> visits = new List<Models.Visit>();

            _conn.Open();
            SqlCommand cmd = new SqlCommand("VisitRead");
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Connection = _conn;
 
            SqlDataReader reader = cmd.ExecuteReader();
 
            while (reader.Read()) {
                Models.Visit visit = new Models.Visit 
                {
                    VisitID = Convert.ToInt32(reader["visitID"]),
                    VisitCoords = Convert.ToString(reader["visitCoords"]),
                    VisitName = Convert.ToString(reader["visitName"]),
                    VisitRating = Convert.ToInt32(reader["visitRating"])
                };
                visits.Add(visit);
            }

            reader.Close();
            cmd.Dispose();
            _conn.Close();
            return visits;
        }
    }
}