import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("temp_pegawai")
export class Pegawai {
    @PrimaryColumn()
    NIP: String;
    @Column()
    NIP_BARU: String;
    @Column()
    NAMA: String;
    @Column()
    NAMA_LENGKAP: String;
    @Column()
    AGAMA: String;
    @Column()
    TEMPAT_LAHIR: String;
    @Column()
    TANGGAL_LAHIR: String;
    @Column()
    JENIS_KELAMIN: number;
    @Column()
    PENDIDIKAN: String;
    @Column()
    JENJANG_PENDIDIKAN: String;
    @Column()
    KODE_LEVEL_JABATAN: String;
    @Column()
    LEVEL_JABATAN: String;
    @Column()
    PANGKAT: String;
    @Column()
    GOL_RUANG: String;
    @Column()
    TMT_CPNS: String;
    @Column()
    TMT_PANGKAT: String;
    @Column()
    MK_TAHUN: number;
    @Column()
    MK_BULAN: number;
    @Column()
    GAJI_POKOK: number;
    @Column()
    TIPE_JABATAN: String;
    @Column()
    KODE_JABATAN: String;
    @Column()
    TAMPIL_JABATAN: String;
    @Column()
    TMT_JABATAN: String;
    @Column()
    KODE_SATUAN_KERJA: String;
    @Column()
    SATKER_1: String;
    @Column()
    SATKER_2: String;
    @Column()
    KODE_SATKER_2: String;
    @Column()
    SATKER_3: String;
    @Column()
    KODE_SATKER_3: String;
    @Column()
    SATKER_4: String;
    @Column()
    KODE_SATKER_4: String;
    @Column()
    SATKER_5: String;
    @Column()
    KODE_SATKER_5: String;
    @Column()
    KODE_GRUP_SATUAN_KERJA: String;
    @Column()
    GRUP_SATUAN_KERJA: String;
    @Column()
    KETERANGAN_SATUAN_KERJA: String;
    @Column()
    STATUS_KAWIN: String;
    @Column()
    ALAMAT_1: String;
    @Column()
    ALAMAT_2: String;
    @Column()
    TELEPON: String;
    @Column()
    NO_HP: String;
    @Column()
    EMAIL: String;
    @Column()
    KAB_KOTA: String;
    @Column()
    PROVINSI: String;
    @Column()
    KODE_POS: String;
    @Column()
    KODE_LOKASI: String;
    @Column()
    ISO: String;
    @Column()
    KODE_PANGKAT: String;
    @Column()
    KETERANGAN: String;
    @Column()
    tmt_pangkat_yad: String;
    @Column()
    tmt_kgb_yad: String;
    @Column()
    USIA_PENSIUN: number;
    @Column()
    TMT_PENSIUN: String;
    @Column()
    MK_TAHUN_1: number;
    @Column()
    MK_BULAN_1: number;
    @Column()
    NSM: String;
    @Column()
    NPSN: String;
    @Column()
    KODE_KUA: String;
    @Column()
    KODE_BIDANG_STUDI: String;
    @Column()
    BIDANG_STUDI: String;
    @Column()
    STATUS_PEGAWAI: String;
    @Column()
    LAT: String;
    @Column()
    LON: String;
    @Column()
    SATKER_KELOLA: String;
    @Column()
    HARI_KERJA: number;
}
