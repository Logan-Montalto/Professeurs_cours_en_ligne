CREATE SERVICE "serv_getJS"
TYPE 'RAW'
AUTHORIZATION OFF
USER "DBA"
URL ON
METHODS 'GET'
AS call dba.proc_getJS(:name);