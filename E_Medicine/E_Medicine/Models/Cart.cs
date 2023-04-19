namespace E_Medicine.Models
{
    public class Cart
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public int MedicineId { get; set; }
        public decimal UnitePrice { get; set; }
        public decimal Discount { get; set;}
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public int MedicineID { get; set; }
    }
}
