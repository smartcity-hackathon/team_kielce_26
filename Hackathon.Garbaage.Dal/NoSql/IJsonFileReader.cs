namespace Hackathon.Garbage.Dal.NoSql
{
    public interface IJsonFileReader
    {
        T GetData<T>();
    }
}