ALTER PROCEDURE "dba"."proc_getImage"(in name char(100))
result(Image long binary)
begin
    call sa_set_http_header('Access-Control-Allow-Origin', '*');
    call sa_set_http_header('Content-Type', 'image/jpeg');
    select xp_read_file(dba.Fct_getPath() || 'jpg\' || name);
end