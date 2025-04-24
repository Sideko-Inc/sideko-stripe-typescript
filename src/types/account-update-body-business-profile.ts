import {
  AccountUpdateBodyBusinessProfileAnnualRevenue,
  External$AccountUpdateBodyBusinessProfileAnnualRevenue,
  Schemas$AccountUpdateBodyBusinessProfileAnnualRevenue,
} from "./account-update-body-business-profile-annual-revenue";
import {
  AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue,
  External$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue,
  Schemas$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue,
} from "./account-update-body-business-profile-monthly-estimated-revenue";
import {
  AccountUpdateBodyBusinessProfileSupportAddress,
  External$AccountUpdateBodyBusinessProfileSupportAddress,
  Schemas$AccountUpdateBodyBusinessProfileSupportAddress,
} from "./account-update-body-business-profile-support-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Business information about the account.
 */
export type AccountUpdateBodyBusinessProfile = {
  annualRevenue?: AccountUpdateBodyBusinessProfileAnnualRevenue | undefined;
  estimatedWorkerCount?: number | undefined;
  mcc?: string | undefined;
  monthlyEstimatedRevenue?:
    | AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue
    | undefined;
  name?: string | undefined;
  productDescription?: string | undefined;
  supportAddress?: AccountUpdateBodyBusinessProfileSupportAddress | undefined;
  supportEmail?: string | undefined;
  supportPhone?: string | undefined;
  supportUrl?: (string | string) | undefined;
  url?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyBusinessProfile = {
  annual_revenue?:
    | External$AccountUpdateBodyBusinessProfileAnnualRevenue
    | undefined;
  estimated_worker_count?: number | undefined;
  mcc?: string | undefined;
  monthly_estimated_revenue?:
    | External$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue
    | undefined;
  name?: string | undefined;
  product_description?: string | undefined;
  support_address?:
    | External$AccountUpdateBodyBusinessProfileSupportAddress
    | undefined;
  support_email?: string | undefined;
  support_phone?: string | undefined;
  support_url?: (string | string) | undefined;
  url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyBusinessProfile
 */
const SchemaIn$AccountUpdateBodyBusinessProfile: z.ZodType<
  AccountUpdateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    annual_revenue:
      Schemas$AccountUpdateBodyBusinessProfileAnnualRevenue.in.optional(),
    estimated_worker_count: z.number().int().optional(),
    mcc: z.string().optional(),
    monthly_estimated_revenue:
      Schemas$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue.in.optional(),
    name: z.string().optional(),
    product_description: z.string().optional(),
    support_address:
      Schemas$AccountUpdateBodyBusinessProfileSupportAddress.in.optional(),
    support_email: z.string().optional(),
    support_phone: z.string().optional(),
    support_url: z.union([z.string(), z.string()]).optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      annual_revenue: "annualRevenue",
      estimated_worker_count: "estimatedWorkerCount",
      mcc: "mcc",
      monthly_estimated_revenue: "monthlyEstimatedRevenue",
      name: "name",
      product_description: "productDescription",
      support_address: "supportAddress",
      support_email: "supportEmail",
      support_phone: "supportPhone",
      support_url: "supportUrl",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyBusinessProfile
 */
const SchemaOut$AccountUpdateBodyBusinessProfile: z.ZodType<
  External$AccountUpdateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyBusinessProfile // the object to be transformed
> = z
  .object({
    annualRevenue:
      Schemas$AccountUpdateBodyBusinessProfileAnnualRevenue.out.optional(),
    estimatedWorkerCount: z.number().int().optional(),
    mcc: z.string().optional(),
    monthlyEstimatedRevenue:
      Schemas$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue.out.optional(),
    name: z.string().optional(),
    productDescription: z.string().optional(),
    supportAddress:
      Schemas$AccountUpdateBodyBusinessProfileSupportAddress.out.optional(),
    supportEmail: z.string().optional(),
    supportPhone: z.string().optional(),
    supportUrl: z.union([z.string(), z.string()]).optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      annualRevenue: "annual_revenue",
      estimatedWorkerCount: "estimated_worker_count",
      mcc: "mcc",
      monthlyEstimatedRevenue: "monthly_estimated_revenue",
      name: "name",
      productDescription: "product_description",
      supportAddress: "support_address",
      supportEmail: "support_email",
      supportPhone: "support_phone",
      supportUrl: "support_url",
      url: "url",
    });
  });

export const Schemas$AccountUpdateBodyBusinessProfile = {
  in: SchemaIn$AccountUpdateBodyBusinessProfile,
  out: SchemaOut$AccountUpdateBodyBusinessProfile,
};
